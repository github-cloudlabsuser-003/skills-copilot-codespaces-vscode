# Login to Azure
Connect-AzAccount

# Set variables
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestorageaccount"
$accountType = "Standard_LRS"

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
New-AzStorageAccount `
  -ResourceGroupName $resourceGroupName `
  -Name $storageAccountName `
  -Location $location `
  -SkuName $accountType `
  -Kind StorageV2