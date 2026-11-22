import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCookiesFormExplodedRoute,
  getCookiesFormNonExplodedRoute,
  getCookiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cookieHandler = app
  .openapi(getCookiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCookiesFormNonExplodedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCookiesFormExplodedRoute, (c) => {
    throw new Error('Not implemented')
  })
