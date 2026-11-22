import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiRequestsIdRoute, getApiRequestsRoute, postApiRequestsIdCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const requestsHandler = app
  .openapi(getApiRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRequestsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
