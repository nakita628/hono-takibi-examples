import { OpenAPIHono } from '@hono/zod-openapi'
import { getResolutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const resolutionsHandler = app.openapi(getResolutionsRoute, (c) => {
  throw new Error('Not implemented')
})
