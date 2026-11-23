import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchAirtravelCoordinatesConfirmCarbonOffsetRoute,
  patchAirtravelCoordinatesConfirmPaymentRoute,
  patchAirtravelCoordinatesConfirmPlantingRoute,
  patchAirtravelCoordinatesConfirmTransactionRoute,
  postAirtravelCoordinatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const airtravelCoordinatesHandler = app
  .openapi(postAirtravelCoordinatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAirtravelCoordinatesConfirmCarbonOffsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAirtravelCoordinatesConfirmPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAirtravelCoordinatesConfirmPlantingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAirtravelCoordinatesConfirmTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
