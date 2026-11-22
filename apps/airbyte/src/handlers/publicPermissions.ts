import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1PermissionsPermissionIdRoute,
  getPublicV1PermissionsPermissionIdRoute,
  getPublicV1PermissionsRoute,
  patchPublicV1PermissionsPermissionIdRoute,
  postPublicV1PermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicPermissionsHandler = app
  .openapi(getPublicV1PermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublicV1PermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1PermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicV1PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
