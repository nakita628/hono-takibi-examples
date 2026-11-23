import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbaasServiceTypeRoute, getDbaasServiceTypeServiceTypeNameRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasServiceTypeHandler = app
  .openapi(getDbaasServiceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasServiceTypeServiceTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
