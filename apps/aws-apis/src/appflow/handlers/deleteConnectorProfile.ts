import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteConnectorProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteConnectorProfileHandler = app.openapi(postDeleteConnectorProfileRoute, (c) => {
  throw new Error('Not implemented')
})
