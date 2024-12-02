-- CreateTable
CREATE TABLE "Email" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Email_body_key" ON "Email"("body");
