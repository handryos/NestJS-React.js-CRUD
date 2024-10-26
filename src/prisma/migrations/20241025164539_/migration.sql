/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `machine` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `monitoring_point` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "machine_name_key" ON "machine"("name");

-- CreateIndex
CREATE UNIQUE INDEX "monitoring_point_name_key" ON "monitoring_point"("name");
