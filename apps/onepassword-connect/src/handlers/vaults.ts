import { OpenAPIHono } from '@hono/zod-openapi'
import { getVaultsRoute, getVaultsVaultUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const vaultsHandler = app
  .openapi(getVaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
