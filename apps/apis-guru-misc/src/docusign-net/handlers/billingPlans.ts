import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdBillingPlanCreditCardRoute,
  getV21AccountsAccountIdBillingPlanDowngradeRoute,
  getV21AccountsAccountIdBillingPlanRoute,
  getV21BillingPlansBillingPlanIdRoute,
  getV21BillingPlansRoute,
  putV21AccountsAccountIdBillingPlanDowngradeRoute,
  putV21AccountsAccountIdBillingPlanPurchasedEnvelopesRoute,
  putV21AccountsAccountIdBillingPlanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingPlansHandler = app
  .openapi(getV21AccountsAccountIdBillingPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBillingPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingPlanCreditCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBillingPlanDowngradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBillingPlanDowngradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBillingPlanPurchasedEnvelopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21BillingPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21BillingPlansBillingPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
