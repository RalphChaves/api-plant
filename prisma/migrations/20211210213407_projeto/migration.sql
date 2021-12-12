/*
  Warnings:

  - Changed the type of `assistido` on the `Streamer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Streamer" DROP COLUMN "assistido",
ADD COLUMN     "assistido" BOOLEAN NOT NULL;
