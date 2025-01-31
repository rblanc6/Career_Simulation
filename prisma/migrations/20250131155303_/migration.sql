/*
  Warnings:

  - You are about to drop the column `reviewId` on the `Items` table. All the data in the column will be lost.
  - Added the required column `itemId` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Items" DROP COLUMN "reviewId";

-- AlterTable
ALTER TABLE "Reviews" ADD COLUMN     "itemId" INTEGER NOT NULL;
