-- CreateTable
CREATE TABLE "MovieSet" (
    "id" TEXT NOT NULL,
    "movies" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MovieSet_pkey" PRIMARY KEY ("id")
);
