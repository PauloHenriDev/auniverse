/*
  Warnings:

  - Added the required column `image` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "image" TEXT NOT NULL;
