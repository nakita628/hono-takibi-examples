import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetFastestDeparturesByCRSCRSRoute, getGetNextDeparturesByCRSCRSRoute } from '../routes'

const app = new OpenAPIHono()

export const fastestAndNextDeparturesHandler = app
  .openapi(getGetFastestDeparturesByCRSCRSRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetNextDeparturesByCRSCRSRoute, (c) => {
    throw new Error('Not implemented')
  })
