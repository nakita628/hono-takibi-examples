import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute,
  getV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute,
  getV21AccountsAccountIdPermissionProfilesRoute,
  postV21AccountsAccountIdPermissionProfilesRoute,
  putV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountPermissionProfilesHandler = app
  .openapi(getV21AccountsAccountIdPermissionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdPermissionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdPermissionProfilesPermissionProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
