import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2AuthOauth2ClientsClientIdRoute, postV2AuthOauth2TokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oAuth2Handler = app
  .openapi(getV2AuthOauth2ClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AuthOauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
