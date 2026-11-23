import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetadataV0KeysKeyNameRoute,
  getMetadataV0KeysKeyNameRoute,
  patchMetadataV0KeysKeyNameRoute,
  postMetadataV0KeysRoute,
  postMetadataV0ListKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(postMetadataV0KeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMetadataV0KeysKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataV0KeysKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMetadataV0KeysKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataV0ListKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
