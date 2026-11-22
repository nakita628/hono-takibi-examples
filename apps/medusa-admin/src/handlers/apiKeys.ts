import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminApiKeysIdRoute,
  getAdminApiKeysIdRoute,
  getAdminApiKeysRoute,
  postAdminApiKeysIdRevokeRoute,
  postAdminApiKeysIdRoute,
  postAdminApiKeysIdSalesChannelsRoute,
  postAdminApiKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(getAdminApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminApiKeysIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminApiKeysIdSalesChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
