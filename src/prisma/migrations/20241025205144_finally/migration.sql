/*
  Warnings:

  - Added the required column `sensorId` to the `monitoring_point` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "monitoring_point_name_key";

-- AlterTable
ALTER TABLE "monitoring_point" ADD COLUMN     "sensorId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "SensorModel";
