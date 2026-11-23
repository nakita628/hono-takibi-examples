import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClientTokensClientTokenIdRoute,
  getClientTokensRoute,
  patchClientTokensClientTokenIdRoute,
  postClientTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientTokensHandler = app
  .openapi(getClientTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientTokensClientTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchClientTokensClientTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
