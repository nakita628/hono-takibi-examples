import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2PermissionsIdRoute,
  getApiV2PermissionsIdRoute,
  getApiV2PermissionsRoute,
  postApiV2PermissionsRoute,
  putApiV2PermissionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getApiV2PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2PermissionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
