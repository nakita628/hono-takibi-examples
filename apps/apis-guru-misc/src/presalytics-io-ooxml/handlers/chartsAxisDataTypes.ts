import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChartsAxisDataTypesIdRoute,
  getChartsAxisDataTypesRoute,
  getChartsAxisDataTypesTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chartsAxisDataTypesHandler = app
  .openapi(getChartsAxisDataTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsAxisDataTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsAxisDataTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
