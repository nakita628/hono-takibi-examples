import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1HierarchyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const hierarchyIdHandler = app.openapi(getV1HierarchyIdRoute, (c) => {
  throw new Error('Not implemented')
})
