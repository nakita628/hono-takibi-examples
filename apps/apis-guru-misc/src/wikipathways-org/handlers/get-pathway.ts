import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPathwayRoute } from '../routes'

const app = new OpenAPIHono()

export const getPathwayHandler = app.openapi(getGetPathwayRoute, (c) => {
  throw new Error('Not implemented')
})
