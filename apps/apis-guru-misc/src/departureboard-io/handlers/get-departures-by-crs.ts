import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetDeparturesByCRSCRSRoute } from '../routes'

const app = new OpenAPIHono()

export const getDeparturesByCrsHandler = app.openapi(getGetDeparturesByCRSCRSRoute, (c) => {
  throw new Error('Not implemented')
})
