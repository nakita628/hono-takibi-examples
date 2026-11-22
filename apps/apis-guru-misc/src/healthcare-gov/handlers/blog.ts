import { OpenAPIHono } from '@hono/zod-openapi'
import { getBlogPageNameMediaTypeExtensionRoute } from '../routes'

const app = new OpenAPIHono()

export const blogHandler = app.openapi(getBlogPageNameMediaTypeExtensionRoute, (c) => {
  throw new Error('Not implemented')
})
