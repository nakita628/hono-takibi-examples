import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetSecurityTokenServicePreferencesRoute,
  postActionSetSecurityTokenServicePreferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSetSecurityTokenServicePreferencesHandler = app
  .openapi(getActionSetSecurityTokenServicePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetSecurityTokenServicePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
