import { OpenAPIHono } from '@hono/zod-openapi'
import { getServiceInstancesIdRoute, getServiceInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceInstanceHandler = app
  .openapi(getServiceInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceInstancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
