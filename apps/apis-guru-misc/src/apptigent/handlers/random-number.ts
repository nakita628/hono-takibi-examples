import { OpenAPIHono } from '@hono/zod-openapi'
import { postRandomNumberRoute } from '../routes'

const app = new OpenAPIHono()

export const randomNumberHandler = app.openapi(postRandomNumberRoute, (c) => {
  throw new Error('Not implemented')
})
