import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OauthAppsGetRoute,
  getApiV1OauthAppsListRoute,
  postApiV1OauthAppsCreateRoute,
  postApiV1OauthAppsDeleteRoute,
  postApiV1OauthAppsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthAppsHandler = app
  .openapi(postApiV1OauthAppsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OauthAppsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OauthAppsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OauthAppsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OauthAppsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
