import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getApiAddonPvtGiftlistGetListIdRouteHandler: RouteHandler<
  typeof getApiAddonPvtGiftlistGetListIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAddonPvtReviewGetProductRateProductIdRouteHandler: RouteHandler<
  typeof getApiAddonPvtReviewGetProductRateProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtAttachmentRouteHandler: RouteHandler<
  typeof postApiCatalogPvtAttachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtAttachmentAttachmentidRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtAttachmentAttachmentidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtAttachmentAttachmentidRouteHandler: RouteHandler<
  typeof getApiCatalogPvtAttachmentAttachmentidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtAttachmentAttachmentidRouteHandler: RouteHandler<
  typeof putApiCatalogPvtAttachmentAttachmentidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtAttachmentsRouteHandler: RouteHandler<
  typeof getApiCatalogPvtAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtBrandRouteHandler: RouteHandler<
  typeof postApiCatalogPvtBrandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtBrandBrandIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtBrandBrandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtBrandBrandIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtBrandBrandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtBrandBrandIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtBrandBrandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtCategoryRouteHandler: RouteHandler<
  typeof postApiCatalogPvtCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtCategoryCategoryIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtCategoryCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtCategoryCategoryIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtCategoryCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtCollectionRouteHandler: RouteHandler<
  typeof postApiCatalogPvtCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtCollectionIndexRouteHandler: RouteHandler<
  typeof postApiCatalogPvtCollectionIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtCollectionInactiveRouteHandler: RouteHandler<
  typeof getApiCatalogPvtCollectionInactiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtCollectionStockkeepingunitImportfileexampleRouteHandler: RouteHandler<
  typeof getApiCatalogPvtCollectionStockkeepingunitImportfileexampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtCollectionCollectionIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtCollectionCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtCollectionCollectionIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtCollectionCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtCollectionCollectionIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtCollectionCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtCollectionCollectionIdPositionRouteHandler: RouteHandler<
  typeof postApiCatalogPvtCollectionCollectionIdPositionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtCollectionCollectionIdProductsRouteHandler: RouteHandler<
  typeof getApiCatalogPvtCollectionCollectionIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeRouteHandler: RouteHandler<
  typeof postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportexcludeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertRouteHandler: RouteHandler<
  typeof postApiCatalogPvtCollectionCollectionIdStockkeepingunitImportinsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtCollectionCollectionIdSubcollectionRouteHandler: RouteHandler<
  typeof getApiCatalogPvtCollectionCollectionIdSubcollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtProductRouteHandler: RouteHandler<
  typeof postApiCatalogPvtProductRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtProductProductIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtProductProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtProductProductIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtProductProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtProductProductIdSalespolicyRouteHandler: RouteHandler<
  typeof getApiCatalogPvtProductProductIdSalespolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRouteHandler: RouteHandler<
  typeof postApiCatalogPvtProductProductIdSalespolicyTradepolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtProductProductIdSimilarcategoryIndexRouteHandler: RouteHandler<
  typeof getApiCatalogPvtProductProductIdSimilarcategoryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRouteHandler: RouteHandler<
  typeof postApiCatalogPvtProductProductIdSimilarcategoryCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtProductProductIdSpecificationRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtProductProductIdSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtProductProductIdSpecificationRouteHandler: RouteHandler<
  typeof getApiCatalogPvtProductProductIdSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtProductProductIdSpecificationRouteHandler: RouteHandler<
  typeof postApiCatalogPvtProductProductIdSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtProductProductIdSpecificationSpecificationIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtProductProductIdSpecificationSpecificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtProductProductIdSpecificationvalueRouteHandler: RouteHandler<
  typeof putApiCatalogPvtProductProductIdSpecificationvalueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSkuattachmentRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSkuattachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSkuattachmentRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSkuattachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSkuattachmentSkuAttachmentAssociationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSkucomplementRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSkucomplementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSkucomplementSkuComplementIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSkucomplementSkuComplementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtSkucomplementSkuComplementIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtSkucomplementSkuComplementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSkuserviceRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSkuserviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSkuserviceSkuServiceIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSkuserviceSkuServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtSkuserviceSkuServiceIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtSkuserviceSkuServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtSkuserviceSkuServiceIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtSkuserviceSkuServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSkuservicetypeRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSkuservicetypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtSkuservicetypeSkuServiceTypeIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtSkuservicetypeSkuServiceTypeIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtSkuservicetypeSkuServiceTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSkuservicetypeattachmentRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSkuservicetypeattachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSkuservicetypeattachmentRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSkuservicetypeattachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSkuservicetypeattachmentSkuServiceTypeAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSkuservicevalueRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSkuservicevalueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSkuservicevalueSkuServiceValueIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtSkuservicevalueSkuServiceValueIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtSkuservicevalueSkuServiceValueIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtSkuservicevalueSkuServiceValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSpecificationRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSpecificationNonstructuredRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSpecificationNonstructuredRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtSpecificationNonstructuredRouteHandler: RouteHandler<
  typeof getApiCatalogPvtSpecificationNonstructuredRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSpecificationNonstructuredIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSpecificationNonstructuredIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtSpecificationNonstructuredIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtSpecificationNonstructuredIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtSpecificationSpecificationIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtSpecificationSpecificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtSpecificationSpecificationIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtSpecificationSpecificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSpecificationgroupRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSpecificationgroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtSpecificationgroupGroupIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtSpecificationgroupGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSpecificationvalueRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSpecificationvalueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtSpecificationvalueSpecificationValueIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtSpecificationvalueSpecificationValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtSpecificationvalueSpecificationValueIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtSpecificationvalueSpecificationValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtStockkeepingunitRouteHandler: RouteHandler<
  typeof getApiCatalogPvtStockkeepingunitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtStockkeepingunitRouteHandler: RouteHandler<
  typeof postApiCatalogPvtStockkeepingunitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexRouteHandler: RouteHandler<
  typeof putApiCatalogPvtStockkeepingunitCopySkuIdfromSkuIdtoFileIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtStockkeepingunitDisassociateSkuIdFileSkuFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtStockkeepingunitSkuIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtStockkeepingunitSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtStockkeepingunitSkuIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtStockkeepingunitSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtStockkeepingunitSkuIdAttachmentRouteHandler: RouteHandler<
  typeof getApiCatalogPvtStockkeepingunitSkuIdAttachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtStockkeepingunitSkuIdComplementRouteHandler: RouteHandler<
  typeof getApiCatalogPvtStockkeepingunitSkuIdComplementRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtStockkeepingunitSkuIdComplementComplementTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtStockkeepingunitSkuIdEanRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtStockkeepingunitSkuIdEanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtStockkeepingunitSkuIdEanRouteHandler: RouteHandler<
  typeof getApiCatalogPvtStockkeepingunitSkuIdEanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtStockkeepingunitSkuIdEanEanRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtStockkeepingunitSkuIdEanEanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtStockkeepingunitSkuIdEanEanRouteHandler: RouteHandler<
  typeof postApiCatalogPvtStockkeepingunitSkuIdEanEanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtStockkeepingunitSkuIdFileRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtStockkeepingunitSkuIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtStockkeepingunitSkuIdFileRouteHandler: RouteHandler<
  typeof getApiCatalogPvtStockkeepingunitSkuIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtStockkeepingunitSkuIdFileRouteHandler: RouteHandler<
  typeof postApiCatalogPvtStockkeepingunitSkuIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtStockkeepingunitSkuIdFileSkuFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtStockkeepingunitSkuIdSpecificationRouteHandler: RouteHandler<
  typeof getApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtStockkeepingunitSkuIdSpecificationRouteHandler: RouteHandler<
  typeof postApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtStockkeepingunitSkuIdSpecificationRouteHandler: RouteHandler<
  typeof putApiCatalogPvtStockkeepingunitSkuIdSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtStockkeepingunitSkuIdSpecificationSpecificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueRouteHandler: RouteHandler<
  typeof putApiCatalogPvtStockkeepingunitSkuIdSpecificationvalueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtStockkeepingunitkitRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtStockkeepingunitkitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtStockkeepingunitkitRouteHandler: RouteHandler<
  typeof getApiCatalogPvtStockkeepingunitkitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtStockkeepingunitkitRouteHandler: RouteHandler<
  typeof postApiCatalogPvtStockkeepingunitkitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtStockkeepingunitkitKitIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtStockkeepingunitkitKitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtStockkeepingunitkitKitIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtStockkeepingunitkitKitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSubcollectionRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSubcollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSubcollectionSubCollectionIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSubcollectionSubCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogPvtSubcollectionSubCollectionIdRouteHandler: RouteHandler<
  typeof getApiCatalogPvtSubcollectionSubCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtSubcollectionSubCollectionIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtSubcollectionSubCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSubcollectionSubCollectionIdBrandRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSubcollectionSubCollectionIdBrandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSubcollectionSubCollectionIdBrandBrandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSubcollectionSubCollectionIdBrandCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSubcollectionSubCollectionIdCategoryRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSubcollectionSubCollectionIdCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSubcollectionSubCollectionIdStockkeepingunitSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogPvtSupplierRouteHandler: RouteHandler<
  typeof postApiCatalogPvtSupplierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiCatalogPvtSupplierSupplierIdRouteHandler: RouteHandler<
  typeof deleteApiCatalogPvtSupplierSupplierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogPvtSupplierSupplierIdRouteHandler: RouteHandler<
  typeof putApiCatalogPvtSupplierSupplierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPubCategoryTreeCategoryLevelsRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPubCategoryTreeCategoryLevelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPubProductsVariationsProductIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPubProductsVariationsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPubSaleschannelSalesChannelIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPubSaleschannelSalesChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsRouteHandler: RouteHandler<
  typeof postApiCatalogSystemPubSkuStockkeepingunitidsbyrefidsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPubSpecificationFieldGetFieldIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPubSpecificationFieldGetFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPubSpecificationFieldvalueFieldIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPubSpecificationFieldvalueFieldIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPubSpecificationGroupGetGroupIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPubSpecificationGroupGetGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtBrandListRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtBrandListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtBrandPagedlistRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtBrandPagedlistRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtBrandBrandIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtBrandBrandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtCollectionSearchRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtCollectionSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtCollectionSearchSearchTermsRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtCollectionSearchSearchTermsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtCommercialconditionListRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtCommercialconditionListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtCommercialconditionCommercialConditionIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtCommercialconditionCommercialConditionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtProductsGetIndexedInfoProductIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtProductsGetIndexedInfoProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtProductsGetProductAndSkuIdsRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtProductsGetProductAndSkuIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtProductsProductgetProductIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtProductsProductgetProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtProductsProductgetbyrefidRefIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtProductsProductgetbyrefidRefIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtProductsProductIdSpecificationRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtProductsProductIdSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogSystemPvtProductsProductIdSpecificationRouteHandler: RouteHandler<
  typeof postApiCatalogSystemPvtProductsProductIdSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSaleschannelListRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSaleschannelListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogSystemPvtSellerRouteHandler: RouteHandler<
  typeof postApiCatalogSystemPvtSellerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogSystemPvtSellerRouteHandler: RouteHandler<
  typeof putApiCatalogSystemPvtSellerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSellerListRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSellerListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSellerSellerIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSellerSellerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSellersSellerIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSellersSellerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogSystemPvtSkuAssociateattachmentsRouteHandler: RouteHandler<
  typeof postApiCatalogSystemPvtSkuAssociateattachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSkuComplementsParentSkuIdTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSkuStockkeepingunitByProductIdProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSkuStockkeepingunitbyalternateIdAlternateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSkuStockkeepingunitbyeanEanRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSkuStockkeepingunitbyidSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSkuStockkeepingunitidbyrefidRefIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSkuStockkeepingunitidsRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSkuStockkeepingunitidsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSkuStockkeepingunitidsbysaleschannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdRouteHandler: RouteHandler<
  typeof postApiCatalogSystemPvtSkusellerChangenotificationSellerIdSellerSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogSystemPvtSkusellerChangenotificationSkuIdRouteHandler: RouteHandler<
  typeof postApiCatalogSystemPvtSkusellerChangenotificationSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdRouteHandler: RouteHandler<
  typeof postApiCatalogSystemPvtSkusellerRemoveSellerIdSellerSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSkusellerSellerIdSellerSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogSystemPvtSpecificationFieldRouteHandler: RouteHandler<
  typeof postApiCatalogSystemPvtSpecificationFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogSystemPvtSpecificationFieldRouteHandler: RouteHandler<
  typeof putApiCatalogSystemPvtSpecificationFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCatalogSystemPvtSpecificationFieldValueRouteHandler: RouteHandler<
  typeof postApiCatalogSystemPvtSpecificationFieldValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCatalogSystemPvtSpecificationFieldValueRouteHandler: RouteHandler<
  typeof putApiCatalogSystemPvtSpecificationFieldValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdRouteHandler: RouteHandler<
  typeof getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
