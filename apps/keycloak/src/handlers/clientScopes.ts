import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmClientScopesClientScopeIdRoute,
  deleteAdminRealmsRealmClientTemplatesClientScopeIdRoute,
  getAdminRealmsRealmClientScopesClientScopeIdRoute,
  getAdminRealmsRealmClientScopesRoute,
  getAdminRealmsRealmClientTemplatesClientScopeIdRoute,
  getAdminRealmsRealmClientTemplatesRoute,
  postAdminRealmsRealmClientScopesRoute,
  postAdminRealmsRealmClientTemplatesRoute,
  putAdminRealmsRealmClientScopesClientScopeIdRoute,
  putAdminRealmsRealmClientTemplatesClientScopeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientScopesHandler = app
  .openapi(getAdminRealmsRealmClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientScopesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmClientTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmClientTemplatesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmClientTemplatesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmClientTemplatesClientScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
