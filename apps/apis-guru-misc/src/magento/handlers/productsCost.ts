import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsCostRoute } from '../routes'

const app = new OpenAPIHono()

export const productsCostHandler = app.openapi(postV1ProductsCostRoute, (c) => {
  throw new Error('Not implemented')
})
