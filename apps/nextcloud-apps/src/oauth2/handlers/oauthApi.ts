import { OpenAPIHono } from '@hono/zod-openapi'
import { postIndexPhpAppsOauth2ApiV1TokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthApiHandler = app.openapi(postIndexPhpAppsOauth2ApiV1TokenRoute, (c) => {
  throw new Error('Not implemented')
})
