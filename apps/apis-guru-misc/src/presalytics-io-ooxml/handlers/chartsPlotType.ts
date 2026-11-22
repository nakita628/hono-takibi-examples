import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChartsPlotTypeIdRoute,
  getChartsPlotTypeRoute,
  getChartsPlotTypeTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chartsPlotTypeHandler = app
  .openapi(getChartsPlotTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsPlotTypeTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsPlotTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
