import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSentryAppsSentryAppIdOrSlugIndexRoute,
  getSentryAppsSentryAppIdOrSlugIndexRoute,
  putSentryAppsSentryAppIdOrSlugIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sentryAppsHandler = app
  .openapi(getSentryAppsSentryAppIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSentryAppsSentryAppIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSentryAppsSentryAppIdOrSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
