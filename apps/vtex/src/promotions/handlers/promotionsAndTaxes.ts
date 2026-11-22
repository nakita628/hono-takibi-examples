import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRnbPvtArchiveBenefitsCalculatorConfigurationRoute,
  getApiRnbPvtArchiveTaxesCalculatorConfigurationRoute,
  getApiRnbPvtBenefitsCalculatorconfigurationRoute,
  getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationRoute,
  getApiRnbPvtTaxesCalculatorconfigurationRoute,
  postApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationRoute,
  postApiRnbPvtCalculatorconfigurationRoute,
  postApiRnbPvtImportCalculatorConfigurationRoute,
  postApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationRoute,
  putApiRnbPvtImportCalculatorConfigurationPromotionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const promotionsAndTaxesHandler = app
  .openapi(getApiRnbPvtArchiveBenefitsCalculatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationRoute, (c) => {
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
  .openapi(postApiRnbPvtImportCalculatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiRnbPvtImportCalculatorConfigurationPromotionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnbPvtTaxesCalculatorconfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
