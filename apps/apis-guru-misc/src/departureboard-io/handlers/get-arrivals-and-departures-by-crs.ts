import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetArrivalsAndDeparturesByCRSCRSRoute } from '../routes'

const app = new OpenAPIHono()

export const getArrivalsAndDeparturesByCrsHandler = app.openapi(
  getGetArrivalsAndDeparturesByCRSCRSRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
