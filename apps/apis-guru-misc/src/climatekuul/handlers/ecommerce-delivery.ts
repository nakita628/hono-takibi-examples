import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchEcommerceDeliveryConfirmCarbonOffsetRoute,
  patchEcommerceDeliveryConfirmPaymentRoute,
  patchEcommerceDeliveryConfirmPlantingRoute,
  patchEcommerceDeliveryConfirmTransactionRoute,
  postEcommerceDeliveryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ecommerceDeliveryHandler = app
  .openapi(postEcommerceDeliveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEcommerceDeliveryConfirmCarbonOffsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEcommerceDeliveryConfirmPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEcommerceDeliveryConfirmPlantingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEcommerceDeliveryConfirmTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
