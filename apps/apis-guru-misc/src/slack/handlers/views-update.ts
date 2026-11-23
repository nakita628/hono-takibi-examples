import { OpenAPIHono } from '@hono/zod-openapi'
import { getViewsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const viewsUpdateHandler = app.openapi(getViewsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
