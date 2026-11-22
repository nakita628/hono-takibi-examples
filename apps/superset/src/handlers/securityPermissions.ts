import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SecurityPermissionsIndexRoute,
  getApiV1SecurityPermissionsInfoRoute,
  getApiV1SecurityPermissionsPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityPermissionsHandler = app
  .openapi(getApiV1SecurityPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityPermissionsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SecurityPermissionsPkRoute, (c) => {
    throw new Error('Not implemented')
  })
