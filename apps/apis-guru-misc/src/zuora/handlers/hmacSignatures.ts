import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1HmacSignaturesRoute } from '../routes'

const app = new OpenAPIHono()

export const hmacSignaturesHandler = app.openapi(postV1HmacSignaturesRoute, (c) => {
  throw new Error('Not implemented')
})
