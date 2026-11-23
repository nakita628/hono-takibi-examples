import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserHerokuKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app.openapi(postUserHerokuKeyRoute, (c) => {
  throw new Error('Not implemented')
})
