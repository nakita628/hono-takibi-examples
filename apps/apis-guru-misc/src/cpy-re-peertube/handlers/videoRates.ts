import { OpenAPIHono } from '@hono/zod-openapi'
import { putApiV1VideosIdRateRoute } from '../routes'

const app = new OpenAPIHono()

export const videoRatesHandler = app.openapi(putApiV1VideosIdRateRoute, (c) => {
  throw new Error('Not implemented')
})
