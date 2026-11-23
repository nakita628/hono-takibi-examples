import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauth2V2UserinfoRoute, postOauth2V2TokeninfoRoute } from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app
  .openapi(postOauth2V2TokeninfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2V2UserinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
