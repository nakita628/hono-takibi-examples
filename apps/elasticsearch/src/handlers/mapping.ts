import { OpenAPIHono } from '@hono/zod-openapi'
import { getMappingFieldFieldsRoute, getMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const mappingHandler = app
  .openapi(getMappingFieldFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
