import { OpenAPIHono } from '@hono/zod-openapi'
import { getViewsOpenRoute } from '../routes'

const app = new OpenAPIHono()

export const viewsOpenHandler = app.openapi(getViewsOpenRoute, (c) => {
  throw new Error('Not implemented')
})
