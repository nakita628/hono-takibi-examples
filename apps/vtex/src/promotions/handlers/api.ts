import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  putApiRnbPvtImportCalculatorConfigurationPromotionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiRnbPubNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtArchiveBenefitsCalculatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtArchiveCouponCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtArchiveCouponCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtArchiveTaxesCalculatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtBenefitsCalculatorconfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtCalculatorconfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtCampaignConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtCampaignConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtCampaignConfigurationCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtCouponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtCouponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtCouponIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtCouponUsageCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtCouponCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtImportCalculatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiRnbPvtImportCalculatorConfigurationPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtMultipleCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtTaxesCalculatorconfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtUnarchiveCouponCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
