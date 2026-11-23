import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVaultsVaultUuidItemsItemUuidRoute,
  getVaultsRoute,
  getVaultsVaultUuidItemsItemUuidFilesFileUuidContentRoute,
  getVaultsVaultUuidItemsItemUuidFilesFileUuidRoute,
  getVaultsVaultUuidItemsItemUuidFilesRoute,
  getVaultsVaultUuidItemsItemUuidRoute,
  getVaultsVaultUuidItemsRoute,
  getVaultsVaultUuidRoute,
  patchVaultsVaultUuidItemsItemUuidRoute,
  postVaultsVaultUuidItemsRoute,
  putVaultsVaultUuidItemsItemUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vaultsHandler = app
  .openapi(getVaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultUuidItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultsVaultUuidItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVaultsVaultUuidItemsItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultUuidItemsItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVaultsVaultUuidItemsItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVaultsVaultUuidItemsItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultUuidItemsItemUuidFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultUuidItemsItemUuidFilesFileUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultUuidItemsItemUuidFilesFileUuidContentRoute, (c) => {
    throw new Error('Not implemented')
  })
