import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ActionsAppKeyRegistrationsAppKeyIdRoute,
  deleteApiV2ActionsConnectionsConnectionIdRoute,
  getApiV2ActionsAppKeyRegistrationsAppKeyIdRoute,
  getApiV2ActionsAppKeyRegistrationsRoute,
  getApiV2ActionsConnectionsConnectionIdRoute,
  patchApiV2ActionsConnectionsConnectionIdRoute,
  postApiV2ActionsConnectionsRoute,
  putApiV2ActionsAppKeyRegistrationsAppKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionConnectionHandler = app
  .openapi(getApiV2ActionsAppKeyRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ActionsAppKeyRegistrationsAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActionsAppKeyRegistrationsAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ActionsAppKeyRegistrationsAppKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ActionsConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ActionsConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ActionsConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ActionsConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
