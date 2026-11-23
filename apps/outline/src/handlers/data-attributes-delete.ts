import { OpenAPIHono } from '@hono/zod-openapi'
import { postDataAttributesDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const dataAttributesDeleteHandler = app.openapi(postDataAttributesDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
