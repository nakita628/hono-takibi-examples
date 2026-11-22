import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicesHaproxyRuntimeAcmeRoute, putServicesHaproxyRuntimeAcmeRoute } from '../routes'

const app = new OpenAPIHono()

export const acmeRuntimeHandler = app
  .openapi(getServicesHaproxyRuntimeAcmeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyRuntimeAcmeRoute, (c) => {
    throw new Error('Not implemented')
  })
