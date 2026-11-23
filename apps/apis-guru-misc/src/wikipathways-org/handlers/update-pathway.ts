import { OpenAPIHono } from '@hono/zod-openapi'
import { getUpdatePathwayRoute } from '../routes'

const app = new OpenAPIHono()

export const updatePathwayHandler = app.openapi(getUpdatePathwayRoute, (c) => {
  throw new Error('Not implemented')
})
