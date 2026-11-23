import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetFastestDeparturesByCRSCRSRoute } from '../routes'

const app = new OpenAPIHono()

export const getFastestDeparturesByCrsHandler = app.openapi(
  getGetFastestDeparturesByCRSCRSRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
