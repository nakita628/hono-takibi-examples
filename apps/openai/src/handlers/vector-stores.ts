import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVectorStoresVectorStoreIdFilesFileIdRoute,
  deleteVectorStoresVectorStoreIdRoute,
  getVectorStoresRoute,
  getVectorStoresVectorStoreIdFileBatchesBatchIdFilesRoute,
  getVectorStoresVectorStoreIdFileBatchesBatchIdRoute,
  getVectorStoresVectorStoreIdFilesFileIdContentRoute,
  getVectorStoresVectorStoreIdFilesFileIdRoute,
  getVectorStoresVectorStoreIdFilesRoute,
  getVectorStoresVectorStoreIdRoute,
  postVectorStoresRoute,
  postVectorStoresVectorStoreIdFileBatchesBatchIdCancelRoute,
  postVectorStoresVectorStoreIdFileBatchesRoute,
  postVectorStoresVectorStoreIdFilesFileIdRoute,
  postVectorStoresVectorStoreIdFilesRoute,
  postVectorStoresVectorStoreIdRoute,
  postVectorStoresVectorStoreIdSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vectorStoresHandler = app
  .openapi(getVectorStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVectorStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVectorStoresVectorStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVectorStoresVectorStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVectorStoresVectorStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVectorStoresVectorStoreIdFileBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVectorStoresVectorStoreIdFileBatchesBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVectorStoresVectorStoreIdFileBatchesBatchIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVectorStoresVectorStoreIdFileBatchesBatchIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVectorStoresVectorStoreIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVectorStoresVectorStoreIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVectorStoresVectorStoreIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVectorStoresVectorStoreIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVectorStoresVectorStoreIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVectorStoresVectorStoreIdFilesFileIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVectorStoresVectorStoreIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
