/*
  Warnings:

  - You are about to drop the `_ItemComments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ItemReviews` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `commentId` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviewId` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "commentId" INTEGER NOT NULL,
ADD COLUMN     "reviewId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ItemComments";

-- DropTable
DROP TABLE "_ItemReviews";
