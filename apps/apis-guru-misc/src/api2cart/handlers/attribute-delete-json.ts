import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAttributeDeleteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const attributeDeleteJsonHandler = app.openapi(deleteAttributeDeleteJsonRoute, (c) => {
  throw new Error('Not implemented')
})
