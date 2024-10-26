-- CreateEnum
CREATE TYPE "SensorModel" AS ENUM ('TcAg', 'TcAs', 'HFPLUS');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(200) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "machine" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "name" VARCHAR(200) NOT NULL,

    CONSTRAINT "machine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monitoring_point" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "machineId" INTEGER NOT NULL,
    "sensorId" INTEGER NOT NULL,

    CONSTRAINT "monitoring_point_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sensor" (
    "id" SERIAL NOT NULL,
    "modelName" "SensorModel" NOT NULL,

    CONSTRAINT "sensor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "monitoring_point" ADD CONSTRAINT "monitoring_point_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "machine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "monitoring_point" ADD CONSTRAINT "monitoring_point_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "sensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
