import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVaultV1KvIdRoute,
  getVaultV1KvIdMetadataRoute,
  getVaultV1KvIdRoute,
  getVaultV1KvIdVersionsRoute,
  getVaultV1KvNameNameRoute,
  getVaultV1KvRoute,
  postVaultV1KeysDataKeyRoute,
  postVaultV1KeysDecryptRoute,
  postVaultV1KeysRekeyRoute,
  postVaultV1KvRoute,
  putVaultV1KvIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vaultHandler = app
  .openapi(postVaultV1KeysDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultV1KeysDecryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultV1KeysRekeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultV1KvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVaultV1KvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultV1KvNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVaultV1KvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultV1KvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVaultV1KvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultV1KvIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVaultV1KvIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
