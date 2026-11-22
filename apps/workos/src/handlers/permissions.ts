import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthorizationPermissionsSlugRoute,
  getAuthorizationPermissionsRoute,
  getAuthorizationPermissionsSlugRoute,
  patchAuthorizationPermissionsSlugRoute,
  postAuthorizationPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app
  .openapi(getAuthorizationPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthorizationPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthorizationPermissionsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthorizationPermissionsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthorizationPermissionsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
