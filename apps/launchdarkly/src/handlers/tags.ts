import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2TagsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app.openapi(getApiV2TagsRoute, (c) => {
  throw new Error('Not implemented')
})
