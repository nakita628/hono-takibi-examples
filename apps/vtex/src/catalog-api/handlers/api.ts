import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtAttachmentAttachmentidRoute,
  deleteApiCatalogPvtBrandBrandIdRoute,
  deleteApiCatalogPvtCollectionCollectionIdRoute,
  deleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute,
  deleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute,
  deleteApiCatalogPvtProductProductIdSpecificationRoute,
  deleteApiCatalogPvtProductProductIdSpecificationSpecificationIdRoute,
  deleteApiCatalogPvtSkuattachmentRoute,
  deleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdRoute,
  deleteApiCatalogPvtSkucomplementSkuComplementIdRoute,
  deleteApiCatalogPvtSkuserviceSkuServiceIdRoute,
  deleteApiCatalogPvtSkuservicetypeattachmentRoute,
  deleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdRoute,
  deleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute,
  deleteApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute,
  deleteApiCatalogPvtSpecificationNonstructuredIdRoute,
  deleteApiCatalogPvtSpecificationNonstructuredRoute,
  deleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdRoute,
  deleteApiCatalogPvtStockkeepingunitkitKitIdRoute,
  deleteApiCatalogPvtStockkeepingunitkitRoute,
  deleteApiCatalogPvtStockkeepingunitSkuIdEanEanRoute,
  deleteApiCatalogPvtStockkeepingunitSkuIdEanRoute,
  deleteApiCatalogPvtStockkeepingunitSkuIdFileRoute,
  deleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute,
  deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute,
  deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdRoute,
  deleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdRoute,
  deleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdRoute,
  deleteApiCatalogPvtSubcollectionSubCollectionIdRoute,
  deleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdRoute,
  deleteApiCatalogPvtSupplierSupplierIdRoute,
  getApiAddonPvtGiftlistGetListIdRoute,
  getApiAddonPvtReviewGetProductRateProductIdRoute,
  getApiCatalogPvtAttachmentAttachmentidRoute,
  getApiCatalogPvtAttachmentsRoute,
  getApiCatalogPvtBrandBrandIdRoute,
  getApiCatalogPvtCategoryCategoryIdRoute,
  getApiCatalogPvtCollectionCollectionIdProductsRoute,
  getApiCatalogPvtCollectionCollectionIdRoute,
  getApiCatalogPvtCollectionCollectionIdSubcollectionRoute,
  getApiCatalogPvtCollectionInactiveRoute,
  getApiCatalogPvtCollectionStockkeepingunitImportfileexampleRoute,
  getApiCatalogPvtProductProductIdRoute,
  getApiCatalogPvtProductProductIdSalespolicyRoute,
  getApiCatalogPvtProductProductIdSimilarcategoryIndexRoute,
  getApiCatalogPvtProductProductIdSpecificationRoute,
  getApiCatalogPvtSkucomplementSkuComplementIdRoute,
  getApiCatalogPvtSkuserviceSkuServiceIdRoute,
  getApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute,
  getApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute,
  getApiCatalogPvtSpecificationNonstructuredIdRoute,
  getApiCatalogPvtSpecificationNonstructuredRoute,
  getApiCatalogPvtSpecificationSpecificationIdRoute,
  getApiCatalogPvtSpecificationvalueSpecificationValueIdRoute,
  getApiCatalogPvtStockkeepingunitkitKitIdRoute,
  getApiCatalogPvtStockkeepingunitkitRoute,
  getApiCatalogPvtStockkeepingunitRoute,
  getApiCatalogPvtStockkeepingunitSkuIdAttachmentRoute,
  getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdRoute,
  getApiCatalogPvtStockkeepingunitSkuIdComplementRoute,
  getApiCatalogPvtStockkeepingunitSkuIdEanRoute,
  getApiCatalogPvtStockkeepingunitSkuIdFileRoute,
  getApiCatalogPvtStockkeepingunitSkuIdRoute,
  getApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute,
  getApiCatalogPvtSubcollectionSubCollectionIdRoute,
  getApiCatalogSystemPubCategoryTreeCategoryLevelsRoute,
  getApiCatalogSystemPubProductsVariationsProductIdRoute,
  getApiCatalogSystemPubSaleschannelSalesChannelIdRoute,
  getApiCatalogSystemPubSpecificationFieldGetFieldIdRoute,
  getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdRoute,
  getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdRoute,
  getApiCatalogSystemPubSpecificationFieldvalueFieldIdRoute,
  getApiCatalogSystemPubSpecificationGroupGetGroupIdRoute,
  getApiCatalogSystemPvtBrandBrandIdRoute,
  getApiCatalogSystemPvtBrandListRoute,
  getApiCatalogSystemPvtBrandPagedlistRoute,
  getApiCatalogSystemPvtCollectionSearchRoute,
  getApiCatalogSystemPvtCollectionSearchSearchTermsRoute,
  getApiCatalogSystemPvtCommercialconditionCommercialConditionIdRoute,
  getApiCatalogSystemPvtCommercialconditionListRoute,
  getApiCatalogSystemPvtProductsGetIndexedInfoProductIdRoute,
  getApiCatalogSystemPvtProductsGetProductAndSkuIdsRoute,
  getApiCatalogSystemPvtProductsProductgetbyrefidRefIdRoute,
  getApiCatalogSystemPvtProductsProductgetProductIdRoute,
  getApiCatalogSystemPvtProductsProductIdSpecificationRoute,
  getApiCatalogSystemPvtSaleschannelListRoute,
  getApiCatalogSystemPvtSellerListRoute,
  getApiCatalogSystemPvtSellerSellerIdRoute,
  getApiCatalogSystemPvtSellersSellerIdRoute,
  getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeRoute,
  getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelRoute,
  getApiCatalogSystemPvtSkuStockkeepingunitidsRoute,
  getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdRoute,
  getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdRoute,
  postApiCatalogPvtAttachmentRoute,
  postApiCatalogPvtBrandRoute,
  postApiCatalogPvtCategoryRoute,
  postApiCatalogPvtCollectionCollectionIdPositionRoute,
  postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeRoute,
  postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertRoute,
  postApiCatalogPvtCollectionIndexRoute,
  postApiCatalogPvtCollectionRoute,
  postApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute,
  postApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute,
  postApiCatalogPvtProductProductIdSpecificationRoute,
  postApiCatalogPvtProductRoute,
  postApiCatalogPvtSkuattachmentRoute,
  postApiCatalogPvtSkucomplementRoute,
  postApiCatalogPvtSkuserviceRoute,
  postApiCatalogPvtSkuservicetypeattachmentRoute,
  postApiCatalogPvtSkuservicetypeRoute,
  postApiCatalogPvtSkuservicevalueRoute,
  postApiCatalogPvtSpecificationgroupRoute,
  postApiCatalogPvtSpecificationRoute,
  postApiCatalogPvtSpecificationvalueRoute,
  postApiCatalogPvtStockkeepingunitkitRoute,
  postApiCatalogPvtStockkeepingunitRoute,
  postApiCatalogPvtStockkeepingunitSkuIdEanEanRoute,
  postApiCatalogPvtStockkeepingunitSkuIdFileRoute,
  postApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute,
  postApiCatalogPvtSubcollectionRoute,
  postApiCatalogPvtSubcollectionSubCollectionIdBrandRoute,
  postApiCatalogPvtSubcollectionSubCollectionIdCategoryRoute,
  postApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitRoute,
  postApiCatalogPvtSupplierRoute,
  postApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsRoute,
  postApiCatalogSystemPvtProductsProductIdSpecificationRoute,
  postApiCatalogSystemPvtSellerRoute,
  postApiCatalogSystemPvtSkuAssociateattachmentsRoute,
  postApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdRoute,
  postApiCatalogSystemPvtSkusellerChangenotificationSkuIdRoute,
  postApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdRoute,
  postApiCatalogSystemPvtSpecificationFieldRoute,
  postApiCatalogSystemPvtSpecificationFieldValueRoute,
  putApiCatalogPvtAttachmentAttachmentidRoute,
  putApiCatalogPvtBrandBrandIdRoute,
  putApiCatalogPvtCategoryCategoryIdRoute,
  putApiCatalogPvtCollectionCollectionIdRoute,
  putApiCatalogPvtProductProductIdRoute,
  putApiCatalogPvtProductProductIdSpecificationvalueRoute,
  putApiCatalogPvtSkuserviceSkuServiceIdRoute,
  putApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute,
  putApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute,
  putApiCatalogPvtSpecificationgroupGroupIdRoute,
  putApiCatalogPvtSpecificationSpecificationIdRoute,
  putApiCatalogPvtSpecificationvalueSpecificationValueIdRoute,
  putApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexRoute,
  putApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute,
  putApiCatalogPvtStockkeepingunitSkuIdRoute,
  putApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute,
  putApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueRoute,
  putApiCatalogPvtSubcollectionSubCollectionIdRoute,
  putApiCatalogPvtSupplierSupplierIdRoute,
  putApiCatalogSystemPvtSellerRoute,
  putApiCatalogSystemPvtSpecificationFieldRoute,
  putApiCatalogSystemPvtSpecificationFieldValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiAddonPvtGiftlistGetListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAddonPvtReviewGetProductRateProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtAttachmentAttachmentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtAttachmentAttachmentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtAttachmentAttachmentidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtBrandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtCategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtCollectionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCollectionInactiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCollectionStockkeepingunitImportfileexampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtCollectionCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCollectionCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtCollectionCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtCollectionCollectionIdPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCollectionCollectionIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtCollectionCollectionIdSubcollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtProductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtProductProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtProductProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtProductProductIdSalespolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtProductProductIdSimilarcategoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtProductProductIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtProductProductIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtProductProductIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtProductProductIdSpecificationSpecificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtProductProductIdSpecificationvalueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuattachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSkuattachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSkucomplementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkucomplementSkuComplementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSkucomplementSkuComplementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSkuserviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuserviceSkuServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSkuserviceSkuServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSkuserviceSkuServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSkuservicetypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuservicetypeattachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSkuservicetypeattachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSkuservicevalueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSpecificationNonstructuredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSpecificationNonstructuredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSpecificationNonstructuredIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSpecificationNonstructuredIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSpecificationSpecificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSpecificationSpecificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSpecificationgroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSpecificationgroupGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSpecificationvalueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSpecificationvalueSpecificationValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSpecificationvalueSpecificationValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtStockkeepingunitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtStockkeepingunitSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdComplementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdEanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdEanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdEanEanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtStockkeepingunitSkuIdEanEanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtStockkeepingunitSkuIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitkitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitkitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtStockkeepingunitkitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtStockkeepingunitkitKitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtStockkeepingunitkitKitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSubcollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSubcollectionSubCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSubcollectionSubCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSubcollectionSubCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSubcollectionSubCollectionIdBrandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSubcollectionSubCollectionIdCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogPvtSupplierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSupplierSupplierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSupplierSupplierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubCategoryTreeCategoryLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubProductsVariationsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubSaleschannelSalesChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubSpecificationFieldGetFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubSpecificationFieldvalueFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubSpecificationGroupGetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtBrandListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtBrandPagedlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtCollectionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtCollectionSearchSearchTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtCommercialconditionListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtCommercialconditionCommercialConditionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtProductsGetIndexedInfoProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtProductsGetProductAndSkuIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtProductsProductgetProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtProductsProductgetbyrefidRefIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtProductsProductIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtProductsProductIdSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSaleschannelListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogSystemPvtSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSellerListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSellerSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSellersSellerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSkuAssociateattachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSkusellerChangenotificationSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSpecificationFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogSystemPvtSpecificationFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSpecificationFieldValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogSystemPvtSpecificationFieldValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
