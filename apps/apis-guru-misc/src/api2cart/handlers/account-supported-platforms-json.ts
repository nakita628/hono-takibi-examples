import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountSupportedPlatformsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const accountSupportedPlatformsJsonHandler = app.openapi(
  getAccountSupportedPlatformsJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
