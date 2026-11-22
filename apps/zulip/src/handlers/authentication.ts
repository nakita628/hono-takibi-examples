import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevListUsersRoute,
  postDevFetchApiKeyRoute,
  postFetchApiKeyRoute,
  postJwtFetchApiKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postFetchApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJwtFetchApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevFetchApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevListUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
