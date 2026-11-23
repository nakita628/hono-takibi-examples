import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPathwayInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const getPathwayInfoHandler = app.openapi(getGetPathwayInfoRoute, (c) => {
  throw new Error('Not implemented')
})
