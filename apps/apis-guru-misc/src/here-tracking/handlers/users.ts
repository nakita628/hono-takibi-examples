import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersV2DevicesRoute,
  getUsersV2HealthRoute,
  getUsersV2VersionRoute,
  postUsersV2LoginRoute,
  postUsersV2RefreshRoute,
  postUsersV2TokenExchangeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersV2DevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersV2HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersV2LoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersV2RefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersV2TokenExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
