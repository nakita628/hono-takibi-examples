import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVaultsVaultIdOrPrefixRoute,
  getVaultsRoute,
  getVaultsVaultIdOrPrefixRoute,
  patchVaultsVaultIdOrPrefixRoute,
  postVaultsRoute,
  putVaultsVaultIdOrPrefixRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vaultsHandler = app
  .openapi(getVaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVaultsVaultIdOrPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultIdOrPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVaultsVaultIdOrPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVaultsVaultIdOrPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
