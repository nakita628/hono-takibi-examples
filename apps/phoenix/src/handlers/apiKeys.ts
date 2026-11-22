import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SystemApiKeysApiKeyIdRoute,
  deleteV1UserApiKeysApiKeyIdRoute,
  getV1SystemApiKeysRoute,
  getV1UserApiKeysRoute,
  getV1UsersApiKeysRoute,
  postV1SystemApiKeysRoute,
  postV1UserApiKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(getV1UserApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UserApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1UserApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SystemApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SystemApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SystemApiKeysApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
