import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2OauthAccessTokenRoute,
  postV2OauthRevokeRoute,
  postV2OauthVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2OauthAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OauthVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
