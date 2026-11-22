import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdLdapGroupLinksCnRoute,
  deleteApiV4GroupsIdLdapGroupLinksProviderCnRoute,
  deleteApiV4GroupsIdLdapGroupLinksRoute,
  getApiV4GroupsIdLdapGroupLinksRoute,
  getApiV4LdapGroupsRoute,
  getApiV4LdapProviderGroupsRoute,
  postApiV4GroupsIdLdapGroupLinksRoute,
  postApiV4GroupsIdLdapSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ldapHandler = app
  .openapi(getApiV4GroupsIdLdapGroupLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdLdapGroupLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdLdapGroupLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdLdapGroupLinksCnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdLdapGroupLinksProviderCnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4LdapGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4LdapProviderGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdLdapSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
