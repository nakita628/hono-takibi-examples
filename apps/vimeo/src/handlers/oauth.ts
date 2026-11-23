import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauthVerifyRoute,
  postOauthAccessTokenRoute,
  postOauthAuthorizeClientRoute,
  postOauthAuthorizeVimeoOauth1Route,
} from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
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
