import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScopesRequestsRequestIdRoute,
  getScopesRequestsRoute,
  getScopesRoute,
  patchScopesRequestsRequestIdApproveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scopesHandler = app
  .openapi(getScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScopesRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScopesRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchScopesRequestsRequestIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
