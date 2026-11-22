import { OpenAPIHono } from '@hono/zod-openapi'
import { getHardwareServicesRoute, getHardwareServicesServiceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getHardwareServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHardwareServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
