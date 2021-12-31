/*
  Warnings:

  - The primary key for the `commands` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `commands` on the `commands` table. All the data in the column will be lost.
  - Added the required column `command` to the `commands` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `commands` DROP PRIMARY KEY,
    DROP COLUMN `commands`,
    ADD COLUMN `command` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`command`);
