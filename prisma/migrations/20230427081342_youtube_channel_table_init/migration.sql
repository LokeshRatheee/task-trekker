/*
  Warnings:

  - You are about to drop the column `createdAt` on the `youtube_channel` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `youtube_channel` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `youtube_channel` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `youtube_channel` table. All the data in the column will be lost.
  - You are about to drop the column `subscribers` on the `youtube_channel` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `youtube_channel` table. All the data in the column will be lost.
  - Added the required column `password` to the `youtube_channel` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `youtube_channel_name_key` ON `youtube_channel`;

-- AlterTable
ALTER TABLE `youtube_channel` DROP COLUMN `createdAt`,
    DROP COLUMN `description`,
    DROP COLUMN `link`,
    DROP COLUMN `name`,
    DROP COLUMN `subscribers`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;
