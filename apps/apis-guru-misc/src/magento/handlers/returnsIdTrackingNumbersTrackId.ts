import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ReturnsIdTrackingNumbersTrackIdRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsIdTrackingNumbersTrackIdHandler = app.openapi(
  deleteV1ReturnsIdTrackingNumbersTrackIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
