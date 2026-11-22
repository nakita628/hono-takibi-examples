import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSharesCreateRoute,
  postSharesInfoRoute,
  postSharesListRoute,
  postSharesRevokeRoute,
  postSharesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesHandler = app
  .openapi(postSharesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
