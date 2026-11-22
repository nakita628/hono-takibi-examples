import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2CilogsRoute } from '../routes'

const app = new OpenAPIHono()

export const ciVisibilityLogsHandler = app.openapi(postApiV2CilogsRoute, (c) => {
  throw new Error('Not implemented')
})
