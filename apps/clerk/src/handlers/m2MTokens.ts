import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getM2mTokensRoute,
  postM2mTokensM2mTokenIdRevokeRoute,
  postM2mTokensRoute,
  postM2mTokensVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const m2MTokensHandler = app
  .openapi(postM2mTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getM2mTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postM2mTokensM2mTokenIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postM2mTokensVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
