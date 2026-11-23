import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDisplayPreferencesDisplayPreferencesIdRoute,
  postDisplayPreferencesDisplayPreferencesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const displayPreferencesHandler = app
  .openapi(getDisplayPreferencesDisplayPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDisplayPreferencesDisplayPreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
