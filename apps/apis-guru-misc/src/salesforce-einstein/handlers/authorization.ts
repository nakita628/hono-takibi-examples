import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV2Oauth2TokensTokenRoute, postV2Oauth2TokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authorizationHandler = app
  .openapi(postV2Oauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2Oauth2TokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
