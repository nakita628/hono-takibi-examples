import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChartsRowNameFormatTypesIdRoute,
  getChartsRowNameFormatTypesRoute,
  getChartsRowNameFormatTypesTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chartsRowNameFormatTypesHandler = app
  .openapi(getChartsRowNameFormatTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowNameFormatTypesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChartsRowNameFormatTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
