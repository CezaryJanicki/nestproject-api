-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_productId_fkey`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
