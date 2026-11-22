import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3VaultSetupTokensIdRoute, postV3VaultSetupTokensRoute } from '../routes'

const app = new OpenAPIHono()

export const setupTokensHandler = app
  .openapi(postV3VaultSetupTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3VaultSetupTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
