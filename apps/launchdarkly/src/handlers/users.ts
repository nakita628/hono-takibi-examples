import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2UserSearchProjectKeyEnvironmentKeyRoute,
  getApiV2UsersProjectKeyEnvironmentKeyRoute,
  getApiV2UsersProjectKeyEnvironmentKeyUserKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiV2UserSearchProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersProjectKeyEnvironmentKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersProjectKeyEnvironmentKeyUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
