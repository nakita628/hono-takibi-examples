import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHrisTimeOffRequestsIdRoute,
  getHrisTimeOffRequestsIdRoute,
  getHrisTimeOffRequestsRoute,
  patchHrisTimeOffRequestsIdRoute,
  postHrisTimeOffRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timeOffRequestsHandler = app
  .openapi(getHrisTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHrisTimeOffRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHrisTimeOffRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisTimeOffRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchHrisTimeOffRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
