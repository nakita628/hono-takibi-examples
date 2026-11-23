import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchUrbanDeliveryConfirmCarbonOffsetRoute,
  patchUrbanDeliveryConfirmPaymentRoute,
  patchUrbanDeliveryConfirmPlantingRoute,
  patchUrbanDeliveryConfirmTransactionRoute,
  postUrbanDeliveryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const urbanDeliveryHandler = app
  .openapi(postUrbanDeliveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUrbanDeliveryConfirmCarbonOffsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUrbanDeliveryConfirmPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUrbanDeliveryConfirmPlantingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUrbanDeliveryConfirmTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
