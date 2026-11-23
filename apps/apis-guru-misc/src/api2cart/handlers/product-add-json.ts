import { OpenAPIHono } from '@hono/zod-openapi'
import { postProductAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const productAddJsonHandler = app.openapi(postProductAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
