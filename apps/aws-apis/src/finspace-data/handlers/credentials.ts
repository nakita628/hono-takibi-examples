import { OpenAPIHono } from '@hono/zod-openapi'
import { getCredentialsProgrammaticEnvironmentIdRoute } from '../routes'

const app = new OpenAPIHono()

export const credentialsHandler = app.openapi(getCredentialsProgrammaticEnvironmentIdRoute, (c) => {
  throw new Error('Not implemented')
})
