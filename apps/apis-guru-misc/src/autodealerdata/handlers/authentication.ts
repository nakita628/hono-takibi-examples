import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetSubUserKeysRoute,
  getGetTokenRoute,
  postGetTokenRoute,
  postMakeSubUserKeyRoute,
  putRevokeSubUserKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(getGetSubUserKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMakeSubUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRevokeSubUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
