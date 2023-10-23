variable "storage_account_name" {
  type = string
}

variable "location" {
  type = string
}

variable "sku_name" {
  type    = string
  default = "Standard_LRS"
}

resource "azurerm_storage_account" "storage_account" {
  name                     = var.storage_account_name
  location                 = var.location
  resource_group_name      = azurerm_resource_group.resource_group.name
  account_tier             = var.sku_name
  account_replication_type = "LRS"

  tags = {
    environment = "dev"
  }
}

resource "azurerm_resource_group" "resource_group" {
  name     = "example-resource-group"
  location = var.location
}