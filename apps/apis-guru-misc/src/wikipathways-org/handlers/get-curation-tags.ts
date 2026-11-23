import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetCurationTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const getCurationTagsHandler = app.openapi(getGetCurationTagsRoute, (c) => {
  throw new Error('Not implemented')
})
