import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const createGroupHandler = app.openapi(postCreateGroupRoute, (c) => {
  throw new Error('Not implemented')
})
