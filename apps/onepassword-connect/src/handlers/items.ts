import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVaultsVaultUuidItemsItemUuidRoute,
  getVaultsVaultUuidItemsItemUuidRoute,
  getVaultsVaultUuidItemsRoute,
  patchVaultsVaultUuidItemsItemUuidRoute,
  postVaultsVaultUuidItemsRoute,
  putVaultsVaultUuidItemsItemUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getVaultsVaultUuidItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultsVaultUuidItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultUuidItemsItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVaultsVaultUuidItemsItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVaultsVaultUuidItemsItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVaultsVaultUuidItemsItemUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
