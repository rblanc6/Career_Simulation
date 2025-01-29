/*
  Warnings:

  - Made the column `avgRating` on table `Items` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Items" ALTER COLUMN "avgRating" SET NOT NULL;
