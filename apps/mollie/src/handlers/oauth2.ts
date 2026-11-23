import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteOauth2TokensRoute, postOauth2TokensRoute } from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app
  .openapi(postOauth2TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauth2TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
