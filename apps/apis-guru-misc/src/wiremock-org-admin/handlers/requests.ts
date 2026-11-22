import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRequestsRequestIdRoute,
  deleteAdminRequestsRoute,
  getAdminRequestsRequestIdRoute,
  getAdminRequestsRoute,
  getAdminRequestsUnmatchedRoute,
  postAdminRequestsCountRoute,
  postAdminRequestsFindRoute,
  postAdminRequestsRemoveByMetadataRoute,
  postAdminRequestsRemoveRoute,
  postAdminRequestsResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestsHandler = app
  .openapi(deleteAdminRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRequestsFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRequestsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRequestsRemoveByMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRequestsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRequestsUnmatchedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
