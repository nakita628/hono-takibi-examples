import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetArrivalsAndDeparturesByCRSCRSRoute,
  getGetArrivalsByCRSCRSRoute,
  getGetDeparturesByCRSCRSRoute,
} from '../routes'

const app = new OpenAPIHono()

export const departuresArrivalsHandler = app
  .openapi(getGetArrivalsAndDeparturesByCRSCRSRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetArrivalsByCRSCRSRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetDeparturesByCRSCRSRoute, (c) => {
    throw new Error('Not implemented')
  })
