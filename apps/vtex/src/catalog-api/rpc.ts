import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAddonPvtGiftlistGetListId(
  args: InferRequestType<(typeof client.api.addon.pvt.giftlist.get)[':listId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.addon.pvt.giftlist.get[':listId'].$get(args, options))
}

export async function getApiAddonPvtReviewGetProductRateProductId(
  args: InferRequestType<(typeof client.api.addon.pvt.review.GetProductRate)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.addon.pvt.review.GetProductRate[':productId'].$get(args, options),
  )
}

export async function postApiCatalogPvtAttachment(
  args: InferRequestType<typeof client.api.catalog.pvt.attachment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.attachment.$post(args, options))
}

export async function getApiCatalogPvtAttachmentAttachmentid(
  args: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.attachment[':attachmentid'].$get(args, options))
}

export async function putApiCatalogPvtAttachmentAttachmentid(
  args: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.attachment[':attachmentid'].$put(args, options))
}

export async function deleteApiCatalogPvtAttachmentAttachmentid(
  args: InferRequestType<(typeof client.api.catalog.pvt.attachment)[':attachmentid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.attachment[':attachmentid'].$delete(args, options),
  )
}

export async function getApiCatalogPvtAttachments(
  args: InferRequestType<typeof client.api.catalog.pvt.attachments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.attachments.$get(args, options))
}

export async function postApiCatalogPvtBrand(
  args: InferRequestType<typeof client.api.catalog.pvt.brand.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.brand.$post(args, options))
}

export async function getApiCatalogPvtBrandBrandId(
  args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.brand[':brandId'].$get(args, options))
}

export async function putApiCatalogPvtBrandBrandId(
  args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.brand[':brandId'].$put(args, options))
}

export async function deleteApiCatalogPvtBrandBrandId(
  args: InferRequestType<(typeof client.api.catalog.pvt.brand)[':brandId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.brand[':brandId'].$delete(args, options))
}

export async function postApiCatalogPvtCategory(
  args: InferRequestType<typeof client.api.catalog.pvt.category.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.category.$post(args, options))
}

export async function getApiCatalogPvtCategoryCategoryId(
  args: InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.category[':categoryId'].$get(args, options))
}

export async function putApiCatalogPvtCategoryCategoryId(
  args: InferRequestType<(typeof client.api.catalog.pvt.category)[':categoryId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.category[':categoryId'].$put(args, options))
}

export async function postApiCatalogPvtCollection(
  args: InferRequestType<typeof client.api.catalog.pvt.collection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.collection.$post(args, options))
}

export async function postApiCatalogPvtCollectionIndex(
  args: InferRequestType<typeof client.api.catalog.pvt.collection.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.collection.index.$post(args, options))
}

export async function getApiCatalogPvtCollectionInactive(
  args: InferRequestType<typeof client.api.catalog.pvt.collection.inactive.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.collection.inactive.$get(args, options))
}

export async function getApiCatalogPvtCollectionStockkeepingunitImportfileexample(
  args: InferRequestType<
    typeof client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.collection.stockkeepingunit.importfileexample.$get(args, options),
  )
}

export async function getApiCatalogPvtCollectionCollectionId(
  args: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.collection[':collectionId'].$get(args, options))
}

export async function putApiCatalogPvtCollectionCollectionId(
  args: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.collection[':collectionId'].$put(args, options))
}

export async function deleteApiCatalogPvtCollectionCollectionId(
  args: InferRequestType<(typeof client.api.catalog.pvt.collection)[':collectionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.collection[':collectionId'].$delete(args, options),
  )
}

export async function postApiCatalogPvtCollectionCollectionIdPosition(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['position']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.collection[':collectionId'].position.$post(args, options),
  )
}

export async function getApiCatalogPvtCollectionCollectionIdProducts(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['products']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.collection[':collectionId'].products.$get(args, options),
  )
}

export async function postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexclude(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importexclude']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.collection[':collectionId'].stockkeepingunit.importexclude.$post(
      args,
      options,
    ),
  )
}

export async function postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsert(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['stockkeepingunit']['importinsert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.collection[':collectionId'].stockkeepingunit.importinsert.$post(
      args,
      options,
    ),
  )
}

export async function getApiCatalogPvtCollectionCollectionIdSubcollection(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.collection)[':collectionId']['subcollection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.collection[':collectionId'].subcollection.$get(args, options),
  )
}

export async function postApiCatalogPvtProduct(
  args: InferRequestType<typeof client.api.catalog.pvt.product.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.product.$post(args, options))
}

export async function getApiCatalogPvtProductProductId(
  args: InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.product[':productId'].$get(args, options))
}

export async function putApiCatalogPvtProductProductId(
  args: InferRequestType<(typeof client.api.catalog.pvt.product)[':productId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.product[':productId'].$put(args, options))
}

export async function getApiCatalogPvtProductProductIdSalespolicy(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.product[':productId'].salespolicy.$get(args, options),
  )
}

export async function postApiCatalogPvtProductProductIdSalespolicyTradepolicyId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.product[':productId'].salespolicy[':tradepolicyId'].$post(args, options),
  )
}

export async function deleteApiCatalogPvtProductProductIdSalespolicyTradepolicyId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['salespolicy'][':tradepolicyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.product[':productId'].salespolicy[':tradepolicyId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiCatalogPvtProductProductIdSimilarcategoryIndex(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.product[':productId'].similarcategory.index.$get(args, options),
  )
}

export async function postApiCatalogPvtProductProductIdSimilarcategoryCategoryId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.product[':productId'].similarcategory[':categoryId'].$post(
      args,
      options,
    ),
  )
}

export async function deleteApiCatalogPvtProductProductIdSimilarcategoryCategoryId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['similarcategory'][':categoryId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.product[':productId'].similarcategory[':categoryId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiCatalogPvtProductProductIdSpecification(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.product[':productId'].specification.$get(args, options),
  )
}

export async function postApiCatalogPvtProductProductIdSpecification(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.product[':productId'].specification.$post(args, options),
  )
}

export async function deleteApiCatalogPvtProductProductIdSpecification(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specification']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.product[':productId'].specification.$delete(args, options),
  )
}

export async function deleteApiCatalogPvtProductProductIdSpecificationSpecificationId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specification'][':specificationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.product[':productId'].specification[':specificationId'].$delete(
      args,
      options,
    ),
  )
}

export async function putApiCatalogPvtProductProductIdSpecificationvalue(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.product)[':productId']['specificationvalue']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.product[':productId'].specificationvalue.$put(args, options),
  )
}

export async function postApiCatalogPvtSkuattachment(
  args: InferRequestType<typeof client.api.catalog.pvt.skuattachment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.skuattachment.$post(args, options))
}

export async function deleteApiCatalogPvtSkuattachment(
  args: InferRequestType<typeof client.api.catalog.pvt.skuattachment.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.skuattachment.$delete(args, options))
}

export async function deleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuattachment)[':skuAttachmentAssociationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.skuattachment[':skuAttachmentAssociationId'].$delete(args, options),
  )
}

export async function postApiCatalogPvtSkucomplement(
  args: InferRequestType<typeof client.api.catalog.pvt.skucomplement.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.skucomplement.$post(args, options))
}

export async function getApiCatalogPvtSkucomplementSkuComplementId(
  args: InferRequestType<(typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.skucomplement[':skuComplementId'].$get(args, options),
  )
}

export async function deleteApiCatalogPvtSkucomplementSkuComplementId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skucomplement)[':skuComplementId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.skucomplement[':skuComplementId'].$delete(args, options),
  )
}

export async function postApiCatalogPvtSkuservice(
  args: InferRequestType<typeof client.api.catalog.pvt.skuservice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.skuservice.$post(args, options))
}

export async function getApiCatalogPvtSkuserviceSkuServiceId(
  args: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.skuservice[':skuServiceId'].$get(args, options))
}

export async function putApiCatalogPvtSkuserviceSkuServiceId(
  args: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.skuservice[':skuServiceId'].$put(args, options))
}

export async function deleteApiCatalogPvtSkuserviceSkuServiceId(
  args: InferRequestType<(typeof client.api.catalog.pvt.skuservice)[':skuServiceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.skuservice[':skuServiceId'].$delete(args, options),
  )
}

export async function postApiCatalogPvtSkuservicetype(
  args: InferRequestType<typeof client.api.catalog.pvt.skuservicetype.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.skuservicetype.$post(args, options))
}

export async function getApiCatalogPvtSkuservicetypeSkuServiceTypeId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$get(args, options),
  )
}

export async function putApiCatalogPvtSkuservicetypeSkuServiceTypeId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$put(args, options),
  )
}

export async function deleteApiCatalogPvtSkuservicetypeSkuServiceTypeId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicetype)[':skuServiceTypeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.skuservicetype[':skuServiceTypeId'].$delete(args, options),
  )
}

export async function postApiCatalogPvtSkuservicetypeattachment(
  args: InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.skuservicetypeattachment.$post(args, options))
}

export async function deleteApiCatalogPvtSkuservicetypeattachment(
  args: InferRequestType<typeof client.api.catalog.pvt.skuservicetypeattachment.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.skuservicetypeattachment.$delete(args, options))
}

export async function deleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicetypeattachment)[':skuServiceTypeAttachmentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.skuservicetypeattachment[':skuServiceTypeAttachmentId'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiCatalogPvtSkuservicevalue(
  args: InferRequestType<typeof client.api.catalog.pvt.skuservicevalue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.skuservicevalue.$post(args, options))
}

export async function getApiCatalogPvtSkuservicevalueSkuServiceValueId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$get(args, options),
  )
}

export async function putApiCatalogPvtSkuservicevalueSkuServiceValueId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$put(args, options),
  )
}

export async function deleteApiCatalogPvtSkuservicevalueSkuServiceValueId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.skuservicevalue)[':skuServiceValueId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.skuservicevalue[':skuServiceValueId'].$delete(args, options),
  )
}

export async function postApiCatalogPvtSpecification(
  args: InferRequestType<typeof client.api.catalog.pvt.specification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.specification.$post(args, options))
}

export async function getApiCatalogPvtSpecificationNonstructured(
  args: InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.specification.nonstructured.$get(args, options))
}

export async function deleteApiCatalogPvtSpecificationNonstructured(
  args: InferRequestType<typeof client.api.catalog.pvt.specification.nonstructured.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.specification.nonstructured.$delete(args, options),
  )
}

export async function getApiCatalogPvtSpecificationNonstructuredId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.specification.nonstructured[':Id'].$get(args, options),
  )
}

export async function deleteApiCatalogPvtSpecificationNonstructuredId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specification.nonstructured)[':Id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.specification.nonstructured[':Id'].$delete(args, options),
  )
}

export async function getApiCatalogPvtSpecificationSpecificationId(
  args: InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.specification[':specificationId'].$get(args, options),
  )
}

export async function putApiCatalogPvtSpecificationSpecificationId(
  args: InferRequestType<(typeof client.api.catalog.pvt.specification)[':specificationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.specification[':specificationId'].$put(args, options),
  )
}

export async function postApiCatalogPvtSpecificationgroup(
  args: InferRequestType<typeof client.api.catalog.pvt.specificationgroup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.specificationgroup.$post(args, options))
}

export async function putApiCatalogPvtSpecificationgroupGroupId(
  args: InferRequestType<(typeof client.api.catalog.pvt.specificationgroup)[':groupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.specificationgroup[':groupId'].$put(args, options),
  )
}

export async function postApiCatalogPvtSpecificationvalue(
  args: InferRequestType<typeof client.api.catalog.pvt.specificationvalue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.specificationvalue.$post(args, options))
}

export async function getApiCatalogPvtSpecificationvalueSpecificationValueId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.specificationvalue[':specificationValueId'].$get(args, options),
  )
}

export async function putApiCatalogPvtSpecificationvalueSpecificationValueId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.specificationvalue)[':specificationValueId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.specificationvalue[':specificationValueId'].$put(args, options),
  )
}

export async function getApiCatalogPvtStockkeepingunit(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.stockkeepingunit.$get(args, options))
}

export async function postApiCatalogPvtStockkeepingunit(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.stockkeepingunit.$post(args, options))
}

export async function putApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndex(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit.copy)[':skuIdfrom'][':skuIdto']['file']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit.copy[':skuIdfrom'][':skuIdto'].file.index.$put(
      args,
      options,
    ),
  )
}

export async function deleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit.disassociate)[':skuId']['file'][':skuFileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit.disassociate[':skuId'].file[':skuFileId'].$delete(
      args,
      options,
    ),
  )
}

export async function getApiCatalogPvtStockkeepingunitSkuId(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.stockkeepingunit[':skuId'].$get(args, options))
}

export async function putApiCatalogPvtStockkeepingunitSkuId(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.stockkeepingunit[':skuId'].$put(args, options))
}

export async function getApiCatalogPvtStockkeepingunitSkuIdAttachment(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].attachment.$get(args, options),
  )
}

export async function getApiCatalogPvtStockkeepingunitSkuIdComplement(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].complement.$get(args, options),
  )
}

export async function getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['complement'][':complementTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].complement[':complementTypeId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiCatalogPvtStockkeepingunitSkuIdEan(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].ean.$get(args, options),
  )
}

export async function deleteApiCatalogPvtStockkeepingunitSkuIdEan(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].ean.$delete(args, options),
  )
}

export async function postApiCatalogPvtStockkeepingunitSkuIdEanEan(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].ean[':ean'].$post(args, options),
  )
}

export async function deleteApiCatalogPvtStockkeepingunitSkuIdEanEan(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['ean'][':ean']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].ean[':ean'].$delete(args, options),
  )
}

export async function getApiCatalogPvtStockkeepingunitSkuIdFile(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$get(args, options),
  )
}

export async function postApiCatalogPvtStockkeepingunitSkuIdFile(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$post(args, options),
  )
}

export async function deleteApiCatalogPvtStockkeepingunitSkuIdFile(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].file.$delete(args, options),
  )
}

export async function putApiCatalogPvtStockkeepingunitSkuIdFileSkuFileId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].file[':skuFileId'].$put(args, options),
  )
}

export async function deleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['file'][':skuFileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].file[':skuFileId'].$delete(args, options),
  )
}

export async function getApiCatalogPvtStockkeepingunitSkuIdSpecification(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$get(args, options),
  )
}

export async function putApiCatalogPvtStockkeepingunitSkuIdSpecification(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$put(args, options),
  )
}

export async function postApiCatalogPvtStockkeepingunitSkuIdSpecification(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$post(args, options),
  )
}

export async function deleteApiCatalogPvtStockkeepingunitSkuIdSpecification(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].specification.$delete(args, options),
  )
}

export async function deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specification'][':specificationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].specification[':specificationId'].$delete(
      args,
      options,
    ),
  )
}

export async function putApiCatalogPvtStockkeepingunitSkuIdSpecificationvalue(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.stockkeepingunit)[':skuId']['specificationvalue']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunit[':skuId'].specificationvalue.$put(args, options),
  )
}

export async function getApiCatalogPvtStockkeepingunitkit(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.stockkeepingunitkit.$get(args, options))
}

export async function postApiCatalogPvtStockkeepingunitkit(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.stockkeepingunitkit.$post(args, options))
}

export async function deleteApiCatalogPvtStockkeepingunitkit(
  args: InferRequestType<typeof client.api.catalog.pvt.stockkeepingunitkit.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.stockkeepingunitkit.$delete(args, options))
}

export async function getApiCatalogPvtStockkeepingunitkitKitId(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunitkit[':kitId'].$get(args, options),
  )
}

export async function deleteApiCatalogPvtStockkeepingunitkitKitId(
  args: InferRequestType<(typeof client.api.catalog.pvt.stockkeepingunitkit)[':kitId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.stockkeepingunitkit[':kitId'].$delete(args, options),
  )
}

export async function postApiCatalogPvtSubcollection(
  args: InferRequestType<typeof client.api.catalog.pvt.subcollection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.subcollection.$post(args, options))
}

export async function getApiCatalogPvtSubcollectionSubCollectionId(
  args: InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.subcollection[':subCollectionId'].$get(args, options),
  )
}

export async function putApiCatalogPvtSubcollectionSubCollectionId(
  args: InferRequestType<(typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.subcollection[':subCollectionId'].$put(args, options),
  )
}

export async function deleteApiCatalogPvtSubcollectionSubCollectionId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.subcollection[':subCollectionId'].$delete(args, options),
  )
}

export async function postApiCatalogPvtSubcollectionSubCollectionIdBrand(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.subcollection[':subCollectionId'].brand.$post(args, options),
  )
}

export async function deleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':brandId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.subcollection[':subCollectionId'].brand[':brandId'].$delete(
      args,
      options,
    ),
  )
}

export async function deleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['brand'][':categoryId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.subcollection[':subCollectionId'].brand[':categoryId'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiCatalogPvtSubcollectionSubCollectionIdCategory(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['category']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.subcollection[':subCollectionId'].category.$post(args, options),
  )
}

export async function postApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunit(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.subcollection[':subCollectionId'].stockkeepingunit.$post(args, options),
  )
}

export async function deleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuId(
  args: InferRequestType<
    (typeof client.api.catalog.pvt.subcollection)[':subCollectionId']['stockkeepingunit'][':skuId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog.pvt.subcollection[':subCollectionId'].stockkeepingunit[':skuId'].$delete(
      args,
      options,
    ),
  )
}

export async function postApiCatalogPvtSupplier(
  args: InferRequestType<typeof client.api.catalog.pvt.supplier.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.supplier.$post(args, options))
}

export async function putApiCatalogPvtSupplierSupplierId(
  args: InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.supplier[':supplierId'].$put(args, options))
}

export async function deleteApiCatalogPvtSupplierSupplierId(
  args: InferRequestType<(typeof client.api.catalog.pvt.supplier)[':supplierId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog.pvt.supplier[':supplierId'].$delete(args, options))
}

export async function getApiCatalogSystemPubCategoryTreeCategoryLevels(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.category.tree)[':categoryLevels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.category.tree[':categoryLevels'].$get(args, options),
  )
}

export async function getApiCatalogSystemPubProductsVariationsProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.products.variations)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.products.variations[':productId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPubSaleschannelSalesChannelId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.saleschannel)[':salesChannelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.saleschannel[':salesChannelId'].$get(args, options),
  )
}

export async function postApiCatalogSystemPubSkuStockkeepingunitidsbyrefids(
  args: InferRequestType<
    typeof client.api.catalog_system.pub.sku.stockkeepingunitidsbyrefids.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.sku.stockkeepingunitidsbyrefids.$post(args, options),
  )
}

export async function getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listByCategoryId)[':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.specification.field.listByCategoryId[':categoryId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.field.listTreeByCategoryId)[':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.specification.field.listTreeByCategoryId[':categoryId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiCatalogSystemPubSpecificationFieldGetFieldId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldGet)[':fieldId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.specification.fieldGet[':fieldId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPubSpecificationFieldvalueFieldId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.fieldvalue)[':fieldId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.specification.fieldvalue[':fieldId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPubSpecificationGroupGetGroupId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pub.specification.groupGet)[':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pub.specification.groupGet[':groupId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtBrandList(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.brand.list.$get(args, options))
}

export async function getApiCatalogSystemPvtBrandPagedlist(
  args: InferRequestType<typeof client.api.catalog_system.pvt.brand.pagedlist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.brand.pagedlist.$get(args, options))
}

export async function getApiCatalogSystemPvtBrandBrandId(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.brand)[':brandId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.brand[':brandId'].$get(args, options))
}

export async function getApiCatalogSystemPvtCollectionSearch(
  args: InferRequestType<typeof client.api.catalog_system.pvt.collection.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.collection.search.$get(args, options))
}

export async function getApiCatalogSystemPvtCollectionSearchSearchTerms(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.collection.search)[':searchTerms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.collection.search[':searchTerms'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtCommercialconditionList(
  args: InferRequestType<typeof client.api.catalog_system.pvt.commercialcondition.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.commercialcondition.list.$get(args, options),
  )
}

export async function getApiCatalogSystemPvtCommercialconditionCommercialConditionId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.commercialcondition)[':commercialConditionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.commercialcondition[':commercialConditionId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtProductsGetIndexedInfoProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.GetIndexedInfo)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.products.GetIndexedInfo[':productId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtProductsGetProductAndSkuIds(
  args: InferRequestType<typeof client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.products.GetProductAndSkuIds.$get(args, options),
  )
}

export async function getApiCatalogSystemPvtProductsProductgetProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productget)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.products.productget[':productId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtProductsProductgetbyrefidRefId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products.productgetbyrefid)[':refId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.products.productgetbyrefid[':refId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtProductsProductIdSpecification(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.products[':productId'].specification.$get(args, options),
  )
}

export async function postApiCatalogSystemPvtProductsProductIdSpecification(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.products)[':productId']['specification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.products[':productId'].specification.$post(args, options),
  )
}

export async function getApiCatalogSystemPvtSaleschannelList(
  args: InferRequestType<typeof client.api.catalog_system.pvt.saleschannel.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.saleschannel.list.$get(args, options))
}

export async function putApiCatalogSystemPvtSeller(
  args: InferRequestType<typeof client.api.catalog_system.pvt.seller.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.seller.$put(args, options))
}

export async function postApiCatalogSystemPvtSeller(
  args: InferRequestType<typeof client.api.catalog_system.pvt.seller.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.seller.$post(args, options))
}

export async function getApiCatalogSystemPvtSellerList(
  args: InferRequestType<typeof client.api.catalog_system.pvt.seller.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.seller.list.$get(args, options))
}

export async function getApiCatalogSystemPvtSellerSellerId(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.seller)[':sellerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.seller[':sellerId'].$get(args, options))
}

export async function getApiCatalogSystemPvtSellersSellerId(
  args: InferRequestType<(typeof client.api.catalog_system.pvt.sellers)[':sellerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.sellers[':sellerId'].$get(args, options))
}

export async function postApiCatalogSystemPvtSkuAssociateattachments(
  args: InferRequestType<typeof client.api.catalog_system.pvt.sku.associateattachments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.sku.associateattachments.$post(args, options),
  )
}

export async function getApiCatalogSystemPvtSkuComplementsParentSkuIdType(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.complements)[':parentSkuId'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.sku.complements[':parentSkuId'][':type'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitByProductId)[':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.sku.stockkeepingunitByProductId[':productId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId)[':alternateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.sku.stockkeepingunitbyalternateId[':alternateId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiCatalogSystemPvtSkuStockkeepingunitbyeanEan(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyean)[':ean']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.sku.stockkeepingunitbyean[':ean'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitbyid)[':skuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.sku.stockkeepingunitbyid[':skuId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid)[':refId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.sku.stockkeepingunitidbyrefid[':refId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtSkuStockkeepingunitids(
  args: InferRequestType<typeof client.api.catalog_system.pvt.sku.stockkeepingunitids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.sku.stockkeepingunitids.$get(args, options),
  )
}

export async function getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannel(
  args: InferRequestType<
    typeof client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.sku.stockkeepingunitidsbysaleschannel.$get(args, options),
  )
}

export async function postApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':sellerId'][':sellerSkuId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.skuseller.changenotification[':sellerId'][':sellerSkuId'].$post(
      args,
      options,
    ),
  )
}

export async function postApiCatalogSystemPvtSkusellerChangenotificationSkuId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.skuseller.changenotification)[':skuId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.skuseller.changenotification[':skuId'].$post(args, options),
  )
}

export async function postApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.skuseller.remove)[':sellerId'][':sellerSkuId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.skuseller.remove[':sellerId'][':sellerSkuId'].$post(
      args,
      options,
    ),
  )
}

export async function getApiCatalogSystemPvtSkusellerSellerIdSellerSkuId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.skuseller)[':sellerId'][':sellerSkuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.skuseller[':sellerId'][':sellerSkuId'].$get(args, options),
  )
}

export async function putApiCatalogSystemPvtSpecificationField(
  args: InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.specification.field.$put(args, options))
}

export async function postApiCatalogSystemPvtSpecificationField(
  args: InferRequestType<typeof client.api.catalog_system.pvt.specification.field.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.catalog_system.pvt.specification.field.$post(args, options))
}

export async function putApiCatalogSystemPvtSpecificationFieldValue(
  args: InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.specification.fieldValue.$put(args, options),
  )
}

export async function postApiCatalogSystemPvtSpecificationFieldValue(
  args: InferRequestType<typeof client.api.catalog_system.pvt.specification.fieldValue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.specification.fieldValue.$post(args, options),
  )
}

export async function getApiCatalogSystemPvtSpecificationFieldValueFieldValueId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.fieldValue)[':fieldValueId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.specification.fieldValue[':fieldValueId'].$get(args, options),
  )
}

export async function getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryId(
  args: InferRequestType<
    (typeof client.api.catalog_system.pvt.specification.groupbycategory)[':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.catalog_system.pvt.specification.groupbycategory[':categoryId'].$get(args, options),
  )
}
