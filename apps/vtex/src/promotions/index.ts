import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePriceSheetSkuIdRoute,
  getApiRnbPvtArchiveBenefitsCalculatorConfigurationRoute,
  getApiRnbPvtArchiveCouponCouponCodeRoute,
  getApiRnbPvtArchiveTaxesCalculatorConfigurationRoute,
  getApiRnbPvtBenefitsCalculatorconfigurationRoute,
  getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationRoute,
  getApiRnbPvtCampaignConfigurationCampaignIdRoute,
  getApiRnbPvtCampaignConfigurationRoute,
  getApiRnbPvtCouponCouponCodeRoute,
  getApiRnbPvtCouponRoute,
  getApiRnbPvtCouponUsageCouponCodeRoute,
  getApiRnbPvtTaxesCalculatorconfigurationRoute,
  getPriceSheetAllPagePageSizeRoute,
  getPriceSheetSkuIdRoute,
  getPriceSheetSkuIdTradePolicyRoute,
  postApiRnbPubNotificationsRoute,
  postApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationRoute,
  postApiRnbPvtArchiveCouponCouponCodeRoute,
  postApiRnbPvtCalculatorconfigurationRoute,
  postApiRnbPvtCampaignConfigurationRoute,
  postApiRnbPvtCouponIndexRoute,
  postApiRnbPvtCouponRoute,
  postApiRnbPvtCouponsRoute,
  postApiRnbPvtImportCalculatorConfigurationRoute,
  postApiRnbPvtMultipleCouponsRoute,
  postApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationRoute,
  postApiRnbPvtUnarchiveCouponCouponCodeRoute,
  postPriceSheetContextRoute,
  postPriceSheetRoute,
  postPubBundlesRoute,
  putApiRnbPvtImportCalculatorConfigurationPromotionIdRoute,
} from './routes'
import {
  deletePriceSheetSkuIdRouteHandler,
  getApiRnbPvtArchiveBenefitsCalculatorConfigurationRouteHandler,
  getApiRnbPvtArchiveCouponCouponCodeRouteHandler,
  getApiRnbPvtArchiveTaxesCalculatorConfigurationRouteHandler,
  getApiRnbPvtBenefitsCalculatorconfigurationRouteHandler,
  getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationRouteHandler,
  getApiRnbPvtCampaignConfigurationCampaignIdRouteHandler,
  getApiRnbPvtCampaignConfigurationRouteHandler,
  getApiRnbPvtCouponCouponCodeRouteHandler,
  getApiRnbPvtCouponRouteHandler,
  getApiRnbPvtCouponUsageCouponCodeRouteHandler,
  getApiRnbPvtTaxesCalculatorconfigurationRouteHandler,
  getPriceSheetAllPagePageSizeRouteHandler,
  getPriceSheetSkuIdRouteHandler,
  getPriceSheetSkuIdTradePolicyRouteHandler,
  postApiRnbPubNotificationsRouteHandler,
  postApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationRouteHandler,
  postApiRnbPvtArchiveCouponCouponCodeRouteHandler,
  postApiRnbPvtCalculatorconfigurationRouteHandler,
  postApiRnbPvtCampaignConfigurationRouteHandler,
  postApiRnbPvtCouponIndexRouteHandler,
  postApiRnbPvtCouponRouteHandler,
  postApiRnbPvtCouponsRouteHandler,
  postApiRnbPvtImportCalculatorConfigurationRouteHandler,
  postApiRnbPvtMultipleCouponsRouteHandler,
  postApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationRouteHandler,
  postApiRnbPvtUnarchiveCouponCouponCodeRouteHandler,
  postPriceSheetContextRouteHandler,
  postPriceSheetRouteHandler,
  postPubBundlesRouteHandler,
  putApiRnbPvtImportCalculatorConfigurationPromotionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiRnbPubNotificationsRoute, postApiRnbPubNotificationsRouteHandler)
  .openapi(
    getApiRnbPvtArchiveBenefitsCalculatorConfigurationRoute,
    getApiRnbPvtArchiveBenefitsCalculatorConfigurationRouteHandler,
  )
  .openapi(
    postApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationRoute,
    postApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationRouteHandler,
  )
  .openapi(
    getApiRnbPvtArchiveCouponCouponCodeRoute,
    getApiRnbPvtArchiveCouponCouponCodeRouteHandler,
  )
  .openapi(
    postApiRnbPvtArchiveCouponCouponCodeRoute,
    postApiRnbPvtArchiveCouponCouponCodeRouteHandler,
  )
  .openapi(
    getApiRnbPvtArchiveTaxesCalculatorConfigurationRoute,
    getApiRnbPvtArchiveTaxesCalculatorConfigurationRouteHandler,
  )
  .openapi(
    getApiRnbPvtBenefitsCalculatorconfigurationRoute,
    getApiRnbPvtBenefitsCalculatorconfigurationRouteHandler,
  )
  .openapi(
    postApiRnbPvtCalculatorconfigurationRoute,
    postApiRnbPvtCalculatorconfigurationRouteHandler,
  )
  .openapi(
    getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationRoute,
    getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationRouteHandler,
  )
  .openapi(getApiRnbPvtCampaignConfigurationRoute, getApiRnbPvtCampaignConfigurationRouteHandler)
  .openapi(postApiRnbPvtCampaignConfigurationRoute, postApiRnbPvtCampaignConfigurationRouteHandler)
  .openapi(
    getApiRnbPvtCampaignConfigurationCampaignIdRoute,
    getApiRnbPvtCampaignConfigurationCampaignIdRouteHandler,
  )
  .openapi(getApiRnbPvtCouponRoute, getApiRnbPvtCouponRouteHandler)
  .openapi(postApiRnbPvtCouponRoute, postApiRnbPvtCouponRouteHandler)
  .openapi(postApiRnbPvtCouponIndexRoute, postApiRnbPvtCouponIndexRouteHandler)
  .openapi(getApiRnbPvtCouponUsageCouponCodeRoute, getApiRnbPvtCouponUsageCouponCodeRouteHandler)
  .openapi(getApiRnbPvtCouponCouponCodeRoute, getApiRnbPvtCouponCouponCodeRouteHandler)
  .openapi(postApiRnbPvtCouponsRoute, postApiRnbPvtCouponsRouteHandler)
  .openapi(
    postApiRnbPvtImportCalculatorConfigurationRoute,
    postApiRnbPvtImportCalculatorConfigurationRouteHandler,
  )
  .openapi(
    putApiRnbPvtImportCalculatorConfigurationPromotionIdRoute,
    putApiRnbPvtImportCalculatorConfigurationPromotionIdRouteHandler,
  )
  .openapi(postApiRnbPvtMultipleCouponsRoute, postApiRnbPvtMultipleCouponsRouteHandler)
  .openapi(
    getApiRnbPvtTaxesCalculatorconfigurationRoute,
    getApiRnbPvtTaxesCalculatorconfigurationRouteHandler,
  )
  .openapi(
    postApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationRoute,
    postApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationRouteHandler,
  )
  .openapi(
    postApiRnbPvtUnarchiveCouponCouponCodeRoute,
    postApiRnbPvtUnarchiveCouponCouponCodeRouteHandler,
  )
  .openapi(postPriceSheetRoute, postPriceSheetRouteHandler)
  .openapi(getPriceSheetAllPagePageSizeRoute, getPriceSheetAllPagePageSizeRouteHandler)
  .openapi(postPriceSheetContextRoute, postPriceSheetContextRouteHandler)
  .openapi(deletePriceSheetSkuIdRoute, deletePriceSheetSkuIdRouteHandler)
  .openapi(getPriceSheetSkuIdRoute, getPriceSheetSkuIdRouteHandler)
  .openapi(getPriceSheetSkuIdTradePolicyRoute, getPriceSheetSkuIdTradePolicyRouteHandler)
  .openapi(postPubBundlesRoute, postPubBundlesRouteHandler)

export default app
