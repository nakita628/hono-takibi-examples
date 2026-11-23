import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStorageBucketsBucketIdFilesFileIdRoute,
  deleteStorageBucketsBucketIdRoute,
  getStorageBucketsBucketIdFilesFileIdDownloadRoute,
  getStorageBucketsBucketIdFilesFileIdPreviewRoute,
  getStorageBucketsBucketIdFilesFileIdRoute,
  getStorageBucketsBucketIdFilesFileIdViewRoute,
  getStorageBucketsBucketIdFilesRoute,
  getStorageBucketsBucketIdRoute,
  getStorageBucketsRoute,
  postStorageBucketsBucketIdFilesRoute,
  postStorageBucketsRoute,
  putStorageBucketsBucketIdFilesFileIdRoute,
  putStorageBucketsBucketIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storageHandler = app
  .openapi(getStorageBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageBucketsBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStorageBucketsBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageBucketsBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageBucketsBucketIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageBucketsBucketIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageBucketsBucketIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStorageBucketsBucketIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStorageBucketsBucketIdFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageBucketsBucketIdFilesFileIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageBucketsBucketIdFilesFileIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStorageBucketsBucketIdFilesFileIdViewRoute, (c) => {
    throw new Error('Not implemented')
  })
