/*
  Warnings:

  - You are about to drop the column `commentId` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `reviewId` on the `Items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Items" DROP COLUMN "commentId",
DROP COLUMN "reviewId";

-- CreateTable
CREATE TABLE "_ItemReviews" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ItemReviews_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ItemComments" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ItemComments_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ItemReviews_B_index" ON "_ItemReviews"("B");

-- CreateIndex
CREATE INDEX "_ItemComments_B_index" ON "_ItemComments"("B");
