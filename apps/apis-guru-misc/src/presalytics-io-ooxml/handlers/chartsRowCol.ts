import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChartsRowColIdRoute,
  getChartsRowColRoute,
  getChartsRowColTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chartsRowColHandler = app
  .openapi(getChartsRowColRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowColTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowColIdRoute, (c) => {
    throw new Error('Not implemented')
  })
