import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionAccountOauthClientsClientIdThumbnailRoute,
  putApiVersionAccountOauthClientsClientIdThumbnailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthClientHandler = app
  .openapi(getApiVersionAccountOauthClientsClientIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionAccountOauthClientsClientIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
