import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVaultsVaultUuidItemsItemUuidFilesFileUuidContentRoute,
  getVaultsVaultUuidItemsItemUuidFilesFileUuidRoute,
  getVaultsVaultUuidItemsItemUuidFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getVaultsVaultUuidItemsItemUuidFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultUuidItemsItemUuidFilesFileUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultsVaultUuidItemsItemUuidFilesFileUuidContentRoute, (c) => {
    throw new Error('Not implemented')
  })
