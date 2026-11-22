import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauth2ApplicationsMeRoute,
  getOauth2KeysRoute,
  getOauth2MeRoute,
  getOauth2UserinfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app
  .openapi(getOauth2MeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2ApplicationsMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2KeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2UserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
