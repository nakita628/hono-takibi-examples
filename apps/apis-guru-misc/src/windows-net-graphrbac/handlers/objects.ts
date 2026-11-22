import { OpenAPIHono } from '@hono/zod-openapi'
import { postTenantIDGetObjectsByObjectIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const objectsHandler = app.openapi(postTenantIDGetObjectsByObjectIdsRoute, (c) => {
  throw new Error('Not implemented')
})
