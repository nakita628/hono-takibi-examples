import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2RumRecoverRequestsRequestIdRoute,
  getApiV2RumRecoverRequestsRoute,
  patchApiV2RumRecoverRequestsRequestIdRoute,
  postApiV2RumRecoverCountRoute,
  postApiV2RumRecoverRequestsRoute,
  postApiV2RumRecoverSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumRecoveryHandler = app
  .openapi(postApiV2RumRecoverCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumRecoverRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumRecoverRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumRecoverRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RumRecoverRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RumRecoverSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
