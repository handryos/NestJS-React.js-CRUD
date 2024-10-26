import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Machine, MonitoringPoints } from '@prisma/client';
import { AuthenticatedRequest } from 'src/middlewares/authenticated.request';
import { PrismaMonitoringPointsRepository } from 'src/repositories/prisma/prisma.monitoring.points';

@Controller('monitoringPoints')
class MonitoringPointsController {
  constructor(
    private readonly monitoringPointRepository: PrismaMonitoringPointsRepository,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthenticatedRequest)
  async create(@Body() monitoringPoint: Omit<MonitoringPoints, 'id'>) {
    try {
      await this.monitoringPointRepository.create(monitoringPoint);
      return {
        status: 'Ok!',
        machine: {
          name: monitoringPoint.name,
        },
      };
    } catch (err: any) {
      throw new InternalServerErrorException(
        'Error creating the monitoring point, verify!. ' + err,
      );
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedRequest)
  async findAll() {
    try {
      const monitoringPoints = await this.monitoringPointRepository.getAll();
      return {
        status: 'Ok!',
        monitoringPoints: monitoringPoints,
      };
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedRequest)
  async getMonitoringPointById(@Param('id') id: number): Promise<{}> {
    try {
      const monitoringPoint = await this.monitoringPointRepository.getById(
        Number(id),
      );
      if (monitoringPoint == null) {
        throw new InternalServerErrorException('Monitoring point not found');
      } else {
        return {
          status: 'Ok!',
          data: monitoringPoint,
        };
      }
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedRequest)
  async update(@Body() monitoringPoint: MonitoringPoints) {
    try {
      const existingMonitoringPoint =
        await this.monitoringPointRepository.getById(monitoringPoint.id);
      if (!existingMonitoringPoint) {
        throw new InternalServerErrorException('Monitoring point not found');
      }

      const monitoringPointWithSameName =
        await this.monitoringPointRepository.getByMonitoringPoints(
          monitoringPoint,
        );
      if (
        monitoringPointWithSameName &&
        monitoringPointWithSameName.id !== monitoringPoint.id
      ) {
        throw new InternalServerErrorException(
          'Monitoring point name already exists. Choose another name.',
        );
      }

      await this.monitoringPointRepository.update(monitoringPoint);

      return {
        status: 'Ok!',
        message: 'Monitoring point updated successfully.',
      };
    } catch (err: any) {
      throw new InternalServerErrorException(
        'Error updating the monitoring point, verify!. ' + err,
      );
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedRequest)
  async delete(@Param('id') id: number) {
    console.log(id);
    try {
      const monitoringPoint = await this.monitoringPointRepository.getById(
        Number(id),
      );
      if (!monitoringPoint) {
        throw new InternalServerErrorException('Monitoring point not found');
      }
      await this.monitoringPointRepository.delete(Number(id));
      return {
        status: 'Ok!',
        message: 'Monitoring point deleted successfully',
      };
    } catch (err: any) {
      throw new InternalServerErrorException(
        'Error deleting the monitoring point, verify!. ' + err,
      );
    }
  }
}
export default MonitoringPointsController;
