import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ApiOauthAccessTokenRoute,
  postV1ApiOauthLiveSessionTokenRoute,
  postV1ApiOauthRequestTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingOAuth10aHandler = app
  .openapi(postV1ApiOauthAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiOauthLiveSessionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiOauthRequestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
