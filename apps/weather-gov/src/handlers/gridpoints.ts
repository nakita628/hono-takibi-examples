import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGridpointsWfoXYForecastHourlyRoute,
  getGridpointsWfoXYForecastRoute,
  getGridpointsWfoXYRoute,
  getGridpointsWfoXYStationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gridpointsHandler = app
  .openapi(getGridpointsWfoXYRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGridpointsWfoXYForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGridpointsWfoXYForecastHourlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGridpointsWfoXYStationsRoute, (c) => {
    throw new Error('Not implemented')
  })
