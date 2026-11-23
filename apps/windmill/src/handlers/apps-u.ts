import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppsUEmbedTokenByCustomPathCustomPathRoute,
  getAppsUGuestEntryByCustomPathCustomPathRoute,
  getAppsUPublicAppByCustomPathCustomPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsUHandler = app
  .openapi(getAppsUGuestEntryByCustomPathCustomPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsUPublicAppByCustomPathCustomPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsUEmbedTokenByCustomPathCustomPathRoute, (c) => {
    throw new Error('Not implemented')
  })
