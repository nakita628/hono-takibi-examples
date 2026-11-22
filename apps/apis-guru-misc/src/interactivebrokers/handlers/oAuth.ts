import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOauthAccessTokenRoute,
  postOauthLiveSessionTokenRoute,
  postOauthRequestTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthHandler = app
  .openapi(postOauthAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthLiveSessionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRequestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
