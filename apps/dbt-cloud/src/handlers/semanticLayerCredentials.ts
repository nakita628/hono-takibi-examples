import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3AccountsAccountIdSemanticLayerCredentialsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const semanticLayerCredentialsHandler = app.openapi(
  getApiV3AccountsAccountIdSemanticLayerCredentialsIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
