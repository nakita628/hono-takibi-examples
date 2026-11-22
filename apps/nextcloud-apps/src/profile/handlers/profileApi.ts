import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpAppsProfileApiV1ResourcesUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const profileApiHandler = app.openapi(
  getOcsV2PhpAppsProfileApiV1ResourcesUserIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
