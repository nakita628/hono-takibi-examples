import { OpenAPIHono } from '@hono/zod-openapi'
import { getBucketsNamespaceRepoResolvePathRoute } from '../routes'

const app = new OpenAPIHono()

export const bucketsHandler = app.openapi(getBucketsNamespaceRepoResolvePathRoute, (c) => {
  throw new Error('Not implemented')
})
