import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTokenRoute,
  getOauthRoute,
  postApiTokenRoute,
  postApiTokenTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthHandler = app
  .openapi(getOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTokenTestRoute, (c) => {
    throw new Error('Not implemented')
  })
