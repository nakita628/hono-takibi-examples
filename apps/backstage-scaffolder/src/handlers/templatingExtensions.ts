import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2TemplatingExtensionsRoute } from '../routes'

const app = new OpenAPIHono()

export const templatingExtensionsHandler = app.openapi(getV2TemplatingExtensionsRoute, (c) => {
  throw new Error('Not implemented')
})
