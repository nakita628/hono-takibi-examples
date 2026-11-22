import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProductsCostDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const productsCostDeleteHandler = app.openapi(postV1ProductsCostDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
