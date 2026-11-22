import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1HierarchyMoveIdRoute } from '../routes'

const app = new OpenAPIHono()

export const hierarchyMoveIdHandler = app.openapi(putV1HierarchyMoveIdRoute, (c) => {
  throw new Error('Not implemented')
})
