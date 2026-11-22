import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1VideosIdEmbedPrivacyAllowedRoute,
  getApiV1VideosIdEmbedPrivacyRoute,
  putApiV1VideosIdEmbedPrivacyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoEmbedPrivacyHandler = app
  .openapi(getApiV1VideosIdEmbedPrivacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdEmbedPrivacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideosIdEmbedPrivacyAllowedRoute, (c) => {
    throw new Error('Not implemented')
  })
