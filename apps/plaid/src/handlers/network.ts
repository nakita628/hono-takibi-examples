import { OpenAPIHono } from '@hono/zod-openapi'
import { postNetworkStatusGetRoute } from '../routes'

const app = new OpenAPIHono()

export const networkHandler = app.openapi(postNetworkStatusGetRoute, (c) => {
  throw new Error('Not implemented')
})
