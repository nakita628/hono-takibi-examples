import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesRoute } from '../routes'

const app = new OpenAPIHono()

export const predefinedStatusHandler = app.openapi(
  getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
