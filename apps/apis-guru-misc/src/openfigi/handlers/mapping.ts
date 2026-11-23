import { OpenAPIHono } from '@hono/zod-openapi'
import { getMappingValuesKeyRoute, postMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const mappingHandler = app
  .openapi(postMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMappingValuesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
