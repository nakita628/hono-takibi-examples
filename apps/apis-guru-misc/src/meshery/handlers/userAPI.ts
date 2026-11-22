import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUserPrefsPerfRoute,
  getApiUserLoginRoute,
  getApiUserLogoutRoute,
  getApiUserPrefsPerfRoute,
  getApiUserPrefsRoute,
  getApiUserTokenRoute,
  postApiUserPrefsPerfRoute,
  postApiUserPrefsRoute,
  postApiUserTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userAPIHandler = app
  .openapi(getApiUserLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUserPrefsPerfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserPrefsPerfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserPrefsPerfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
