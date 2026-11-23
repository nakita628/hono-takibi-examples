import { OpenAPIHono } from '@hono/zod-openapi'
import { getPageNameMediaTypeExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const pageNamemediaTypeExtensionHandler = app.openapi(
  getPageNameMediaTypeExtensionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
