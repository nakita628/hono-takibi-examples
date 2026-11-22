import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LoginOauthProviderRoute,
  getApiV1LoginOauthProviderRoute,
  getApiV1SelfOauthProviderRoute,
  postApiV1LoginOauthProviderRoute,
  postApiV1LoginTwoFactorRoute,
  postApiV1SelfOauthProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loginWithOAuth2Handler = app
  .openapi(deleteApiV1LoginOauthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LoginOauthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LoginOauthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LoginTwoFactorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SelfOauthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SelfOauthProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
