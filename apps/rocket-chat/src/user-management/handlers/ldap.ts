import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1LdapSyncNowRoute,
  postApiV1LdapTestConnectionRoute,
  postApiV1LdapTestSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ldapHandler = app
  .openapi(postApiV1LdapSyncNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LdapTestConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LdapTestSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
