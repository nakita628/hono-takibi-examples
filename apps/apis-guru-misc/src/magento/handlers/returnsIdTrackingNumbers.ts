import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReturnsIdTrackingNumbersRoute, postV1ReturnsIdTrackingNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsIdTrackingNumbersHandler = app
  .openapi(getV1ReturnsIdTrackingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReturnsIdTrackingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
