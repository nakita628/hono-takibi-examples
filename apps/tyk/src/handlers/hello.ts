import { OpenAPIHono } from '@hono/zod-openapi'
import { getHelloRoute } from '../routes'

const app = new OpenAPIHono()

export const helloHandler = app.openapi(getHelloRoute, (c) => {
  throw new Error('Not implemented')
})
