import { OpenAPIHono } from '@hono/zod-openapi'
import { postDataAttributesCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const dataAttributesCreateHandler = app.openapi(postDataAttributesCreateRoute, (c) => {
  throw new Error('Not implemented')
})
