import { OpenAPIHono } from '@hono/zod-openapi'
import { getTargetResourceTypesResourceTypeRoute, getTargetResourceTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const targetResourceTypesHandler = app
  .openapi(getTargetResourceTypesResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
