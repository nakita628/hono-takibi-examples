import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGsiBestHourRoute,
  getGsiDispatchRoute,
  getGsiMarketdataRoute,
  getGsiPredictionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gsiHandler = app
  .openapi(getGsiBestHourRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGsiDispatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGsiMarketdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGsiPredictionRoute, (c) => {
    throw new Error('Not implemented')
  })
