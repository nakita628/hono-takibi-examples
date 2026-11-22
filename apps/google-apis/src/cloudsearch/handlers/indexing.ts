import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1IndexingNameRoute,
  deleteV1IndexingNameSchemaRoute,
  getV1IndexingNameItemsRoute,
  getV1IndexingNameRoute,
  getV1IndexingNameSchemaRoute,
  postV1IndexingNameIndexRoute,
  postV1IndexingNameItemsDeleteQueueItemsRoute,
  postV1IndexingNameItemsPollRoute,
  postV1IndexingNameItemsUnreserveRoute,
  postV1IndexingNamePushRoute,
  postV1IndexingNameUploadRoute,
  putV1IndexingNameSchemaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexingHandler = app
  .openapi(deleteV1IndexingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndexingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndexingNameItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNameItemsDeleteQueueItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNameItemsPollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNameItemsUnreserveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IndexingNameSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IndexingNameSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1IndexingNameSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNamePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexingNameUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
