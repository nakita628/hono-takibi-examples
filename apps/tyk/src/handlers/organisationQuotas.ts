import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTykOrgKeysKeyIDRoute,
  getTykOrgKeysKeyIDRoute,
  getTykOrgKeysRoute,
  postTykOrgKeysKeyIDRoute,
  putTykOrgKeysKeyIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organisationQuotasHandler = app
  .openapi(getTykOrgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykOrgKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykOrgKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykOrgKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykOrgKeysKeyIDRoute, (c) => {
    throw new Error('Not implemented')
  })
