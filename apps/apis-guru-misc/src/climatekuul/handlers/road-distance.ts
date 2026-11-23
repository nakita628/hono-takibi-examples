import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchRoadDistanceConfirmCarbonOffsetRoute,
  patchRoadDistanceConfirmPaymentRoute,
  patchRoadDistanceConfirmPlantingRoute,
  patchRoadDistanceConfirmTransactionRoute,
  postRoadDistanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roadDistanceHandler = app
  .openapi(postRoadDistanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoadDistanceConfirmCarbonOffsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoadDistanceConfirmPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoadDistanceConfirmPlantingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRoadDistanceConfirmTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
