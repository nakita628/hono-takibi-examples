import { OpenAPIHono } from '@hono/zod-openapi'
import { getInfoRoute, getServicesHaproxyRuntimeInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const informationHandler = app
  .openapi(getInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
