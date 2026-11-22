import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiTreatyIdBusinessItemsRoute, getApiTreatyIdRoute, getApiTreatyRoute } from '../routes'

const app = new OpenAPIHono()

export const treatyHandler = app
  .openapi(getApiTreatyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTreatyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTreatyIdBusinessItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
