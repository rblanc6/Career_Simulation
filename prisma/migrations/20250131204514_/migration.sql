/*
  Warnings:

  - You are about to drop the column `commentId` on the `Items` table. All the data in the column will be lost.
  - Added the required column `reviewId` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "reviewId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Items" DROP COLUMN "commentId";
