import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2UsersMeLogoutRoute,
  deleteApiV2UsersUserIdSessionsRoute,
  deleteApiV2UsersUserIdSessionsSessionIdRoute,
  getApiV2SessionsRoute,
  getApiV2UsersMeSessionRenewRoute,
  getApiV2UsersMeSessionRoute,
  getApiV2UsersUserIdSessionsRoute,
  getApiV2UsersUserIdSessionsSessionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(getApiV2SessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersMeLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersMeSessionRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
