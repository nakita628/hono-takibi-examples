import { OpenAPIHono } from '@hono/zod-openapi'
import { getAreasRoute } from '../routes'

const app = new OpenAPIHono()

export const areasHandler = app.openapi(getAreasRoute, (c) => {
  throw new Error('Not implemented')
})
