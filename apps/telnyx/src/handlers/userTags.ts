import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const userTagsHandler = app.openapi(getUserTagsRoute, (c) => {
  throw new Error('Not implemented')
})
