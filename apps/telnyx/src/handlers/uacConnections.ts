import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUacConnectionsIdRoute,
  getSipRegistrationStatusRoute,
  getUacConnectionsIdRoute,
  getUacConnectionsRoute,
  patchUacConnectionsIdRoute,
  postUacConnectionsIdActionsCheckRegistrationStatusRoute,
  postUacConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uacConnectionsHandler = app
  .openapi(getSipRegistrationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUacConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUacConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUacConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUacConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUacConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUacConnectionsIdActionsCheckRegistrationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
