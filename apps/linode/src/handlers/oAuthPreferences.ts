import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionProfilePreferencesRoute,
  putApiVersionProfilePreferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthPreferencesHandler = app
  .openapi(getApiVersionProfilePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionProfilePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
