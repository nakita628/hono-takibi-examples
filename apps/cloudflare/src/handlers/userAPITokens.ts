import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserTokensTokenIdRoute,
  getUserTokensPermissionGroupsRoute,
  getUserTokensRoute,
  getUserTokensTokenIdRoute,
  getUserTokensVerifyRoute,
  postUserTokensRoute,
  putUserTokensTokenIdRoute,
  putUserTokensTokenIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAPITokensHandler = app
  .openapi(getUserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTokensPermissionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTokensVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserTokensTokenIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
