import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserCustomerStoresStoreIdAlertsRoute,
  postV2UserCustomerStoresStoreIdAlertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customer__AlertsHandler = app
  .openapi(getV2UserCustomerStoresStoreIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerStoresStoreIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
