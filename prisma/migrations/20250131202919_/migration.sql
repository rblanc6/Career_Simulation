-- CreateTable
CREATE TABLE "_CommentsToReviews" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CommentsToReviews_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CommentsToReviews_B_index" ON "_CommentsToReviews"("B");
