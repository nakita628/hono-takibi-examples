import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommoditiesRoute } from '../routes'

const app = new OpenAPIHono()

export const commoditiesHandler = app.openapi(getCommoditiesRoute, (c) => {
  throw new Error('Not implemented')
})
