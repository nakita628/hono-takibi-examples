import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1Oauth2ProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const oAuth2Handler = app.openapi(getApiV1Oauth2ProvidersRoute, (c) => {
  throw new Error('Not implemented')
})
