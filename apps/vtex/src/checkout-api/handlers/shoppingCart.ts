import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCheckoutPubOrderFormOrderFormIdInstallmentsRoute,
  getApiCheckoutPubOrderFormOrderFormIdRoute,
  getApiCheckoutPubOrderFormRoute,
  getCheckoutChangeToAnonymousUserOrderFormIdRoute,
  patchApiCheckoutPubOrderFormOrderFormIdProfileRoute,
  postApiCheckoutPubOrderFormOrderFormIdCouponsRoute,
  postApiCheckoutPubOrderFormOrderFormIdItemsRemoveAllRoute,
  postApiCheckoutPubOrderFormOrderFormIdItemsRoute,
  postApiCheckoutPubOrderFormOrderFormIdItemsUpdateRoute,
  postApiCheckoutPubOrderFormsSimulationRoute,
  putApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPriceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shoppingCartHandler = app
  .openapi(getApiCheckoutPubOrderFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCheckoutPubOrderFormOrderFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPubOrderFormOrderFormIdCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCheckoutPubOrderFormOrderFormIdInstallmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPubOrderFormOrderFormIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPubOrderFormOrderFormIdItemsRemoveAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPubOrderFormOrderFormIdItemsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCheckoutPubOrderFormOrderFormIdItemsItemIndexPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCheckoutPubOrderFormOrderFormIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCheckoutPubOrderFormsSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCheckoutChangeToAnonymousUserOrderFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
