import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserTopicsRoute } from '../routes'

const app = new OpenAPIHono()

export const userTopicsHandler = app.openapi(postUserTopicsRoute, (c) => {
  throw new Error('Not implemented')
})
