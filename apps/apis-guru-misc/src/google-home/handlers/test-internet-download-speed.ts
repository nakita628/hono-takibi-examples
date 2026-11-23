import { OpenAPIHono } from '@hono/zod-openapi'
import { postTestInternetDownloadSpeedRoute } from '../routes'

const app = new OpenAPIHono()

export const testInternetDownloadSpeedHandler = app.openapi(
  postTestInternetDownloadSpeedRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
