import { OpenAPIHono } from '@hono/zod-openapi'
import { postListConnectorEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const listConnectorEntitiesHandler = app.openapi(postListConnectorEntitiesRoute, (c) => {
  throw new Error('Not implemented')
})
