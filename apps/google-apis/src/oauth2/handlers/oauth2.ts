import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauth2V2TokeninfoRoute } from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app.openapi(postOauth2V2TokeninfoRoute, (c) => {
  throw new Error('Not implemented')
})
