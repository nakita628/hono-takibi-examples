import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app.openapi(getApiTagsRoute, (c) => {
  throw new Error('Not implemented')
})
