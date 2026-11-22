import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CustomUserStatusListRoute,
  postApiV1CustomUserStatusCreateRoute,
  postApiV1CustomUserStatusDeleteRoute,
  postApiV1CustomUserStatusUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customUserStatusHandler = app
  .openapi(getApiV1CustomUserStatusListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomUserStatusCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomUserStatusUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomUserStatusDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
