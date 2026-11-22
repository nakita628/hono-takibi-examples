import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getForecastSettings202609ForecastTypesForecastTypeIdRoute,
  getForecastSettings202609ForecastTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getForecastSettings202609ForecastTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getForecastSettings202609ForecastTypesForecastTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
