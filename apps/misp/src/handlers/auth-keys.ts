import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthKeysDeleteAuthKeyIdRoute,
  getAuthKeysRoute,
  getAuthKeysViewAuthKeyIdRoute,
  postAuthKeysAddUserIdRoute,
  postAuthKeysEditAuthKeyIdRoute,
  postAuthKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authKeysHandler = app
  .openapi(getAuthKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKeysAddUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthKeysViewAuthKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthKeysEditAuthKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthKeysDeleteAuthKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
