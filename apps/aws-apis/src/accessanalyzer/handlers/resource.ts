import { OpenAPIHono } from '@hono/zod-openapi'
import { postResourceScanRoute } from '../routes'

const app = new OpenAPIHono()

export const resourceHandler = app.openapi(postResourceScanRoute, (c) => {
  throw new Error('Not implemented')
})
