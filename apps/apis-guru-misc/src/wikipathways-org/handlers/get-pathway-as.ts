import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPathwayAsRoute } from '../routes'

const app = new OpenAPIHono()

export const getPathwayAsHandler = app.openapi(getGetPathwayAsRoute, (c) => {
  throw new Error('Not implemented')
})
