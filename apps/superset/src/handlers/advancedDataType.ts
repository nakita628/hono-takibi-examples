import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1AdvancedDataTypeConvertRoute, getApiV1AdvancedDataTypeTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedDataTypeHandler = app
  .openapi(getApiV1AdvancedDataTypeConvertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AdvancedDataTypeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
