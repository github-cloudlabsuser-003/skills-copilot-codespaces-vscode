#!/bin/bash

# Set variables
resourceGroupName="<resource-group-name>"
storageAccountName="<storage-account-name>"
location="<location>"
skuName="Standard_LRS"

# Create resource group
az group create --name $resourceGroupName --location $location

# Create storage account
az storage account create --name $storageAccountName --resource-group $resourceGroupName --location $location --sku $skuName --kind StorageV2 --access-tier Hot

# Retrieve connection string
connectionString=$(az storage account show-connection-string --name $storageAccountName --resource-group $resourceGroupName --query connectionString --output tsv)

# Display connection string
echo "Connection string: $connectionString"