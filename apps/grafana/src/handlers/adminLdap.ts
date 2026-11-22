import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminLdapStatusRoute,
  getAdminLdapSyncStatusRoute,
  getAdminLdapUserNameRoute,
  postAdminLdapReloadRoute,
  postAdminLdapSyncUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminLdapHandler = app
  .openapi(getAdminLdapSyncStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminLdapReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLdapStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminLdapSyncUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLdapUserNameRoute, (c) => {
    throw new Error('Not implemented')
  })
