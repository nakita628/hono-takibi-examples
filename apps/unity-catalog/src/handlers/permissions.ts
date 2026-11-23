import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPermissionsSecurableTypeFullNameRoute,
  patchPermissionsSecurableTypeFullNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getPermissionsSecurableTypeFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPermissionsSecurableTypeFullNameRoute, (c) => {
    throw new Error('Not implemented')
  })
