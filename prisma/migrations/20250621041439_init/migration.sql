-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "birthday" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "affiliation" TEXT NOT NULL,
    "skinTone" TEXT NOT NULL,
    "eyeColor" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "quoteSource" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);
