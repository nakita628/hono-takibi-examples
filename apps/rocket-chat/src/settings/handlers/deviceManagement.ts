import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SessionsInfoAdminRoute,
  getApiV1SessionsInfoRoute,
  getApiV1SessionsListAllRoute,
  getApiV1SessionsListRoute,
  postApiV1SessionsLogoutMeRoute,
  postApiV1SessionsLogoutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementHandler = app
  .openapi(getApiV1SessionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SessionsListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SessionsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SessionsInfoAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SessionsLogoutMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SessionsLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
