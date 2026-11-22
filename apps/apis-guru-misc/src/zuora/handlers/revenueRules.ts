import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1RevenueRecognitionRulesProductChargesChargeKeyRoute,
  getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyRoute,
  getV1SettingsFinanceRevenueAutomationStartDateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const revenueRulesHandler = app
  .openapi(getV1RevenueRecognitionRulesProductChargesChargeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RevenueRecognitionRulesSubscriptionChargesChargeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SettingsFinanceRevenueAutomationStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
