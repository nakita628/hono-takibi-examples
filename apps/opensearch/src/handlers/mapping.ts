import { OpenAPIHono } from '@hono/zod-openapi'
import { getMappingFieldFieldsRoute, getMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const mappingHandler = app
  .openapi(getMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMappingFieldFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
