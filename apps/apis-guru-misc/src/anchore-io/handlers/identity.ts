import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountRoute,
  getUserCredentialsRoute,
  getUserRoute,
  postUserCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityHandler = app
  .openapi(getAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
