-- CreateTable
CREATE TABLE "_StreamerToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_StreamerToUser_AB_unique" ON "_StreamerToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_StreamerToUser_B_index" ON "_StreamerToUser"("B");

-- AddForeignKey
ALTER TABLE "_StreamerToUser" ADD FOREIGN KEY ("A") REFERENCES "Streamer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StreamerToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
