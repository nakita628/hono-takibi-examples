import { OpenAPIHono } from '@hono/zod-openapi'
import { postDataAttributesListRoute } from '../routes'

const app = new OpenAPIHono()

export const dataAttributesListHandler = app.openapi(postDataAttributesListRoute, (c) => {
  throw new Error('Not implemented')
})
