import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app.openapi(postUserCreateRoute, (c) => {
  throw new Error('Not implemented')
})
