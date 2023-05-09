/*
  Warnings:

  - You are about to drop the `youtube_channel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `youtube_channel`;

-- CreateTable
CREATE TABLE `users` (
    `firstName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
