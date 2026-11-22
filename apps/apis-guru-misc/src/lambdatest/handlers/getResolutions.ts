import { OpenAPIHono } from '@hono/zod-openapi'
import { getResolutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const getResolutionsHandler = app.openapi(getResolutionsRoute, (c) => {
  throw new Error('Not implemented')
})
