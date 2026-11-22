import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTokensRoute,
  getOauthVerifyRoute,
  postOauthAccessTokenRoute,
  postOauthAuthorizeClientRoute,
  postOauthAuthorizeVimeoOauth1Route,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationExtrasEssentialsHandler = app
  .openapi(postOauthAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthAuthorizeClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthAuthorizeVimeoOauth1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
