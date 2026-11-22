import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRechargeCreditCardRoute,
  getRechargePackagesCountryCountryRoute,
  getRechargeTransactionsRoute,
  getRechargeTransactionsTransactionIdRoute,
  putRechargeCreditCardRoute,
  putRechargePurchasePackageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountRechargeHandler = app
  .openapi(getRechargeCreditCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRechargeCreditCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRechargePackagesCountryCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRechargePurchasePackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRechargeTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRechargeTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
