import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersSuspendRoute } from '../routes'

const app = new OpenAPIHono()

export const usersSuspendHandler = app.openapi(postUsersSuspendRoute, (c) => {
  throw new Error('Not implemented')
})
