import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1GroupPermissionsCreateRoute,
  postV1GroupPermissionsDeleteRoute,
  postV1GroupPermissionsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupPermissionHandler = app
  .openapi(postV1GroupPermissionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupPermissionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GroupPermissionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
