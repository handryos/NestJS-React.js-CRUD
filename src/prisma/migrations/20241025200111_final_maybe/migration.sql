/*
  Warnings:

  - You are about to drop the column `sensorId` on the `monitoring_point` table. All the data in the column will be lost.
  - You are about to drop the `sensor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "monitoring_point" DROP CONSTRAINT "monitoring_point_sensorId_fkey";

-- AlterTable
ALTER TABLE "monitoring_point" DROP COLUMN "sensorId";

-- DropTable
DROP TABLE "sensor";
