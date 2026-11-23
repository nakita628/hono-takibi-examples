import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductFieldsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productFieldsJsonHandler = app.openapi(getProductFieldsJsonRoute, (c) => {
  throw new Error('Not implemented')
})
