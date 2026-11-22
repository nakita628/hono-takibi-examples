import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBlockStorageIdRoute,
  deleteBlockStorageSnapshotIdRoute,
  getBlockStorageIdRoute,
  getBlockStorageRoute,
  getBlockStorageSnapshotIdRoute,
  getBlockStorageSnapshotRoute,
  postBlockStorageIdCreateSnapshotRoute,
  postBlockStorageRoute,
  putBlockStorageIdAttachRoute,
  putBlockStorageIdDetachRoute,
  putBlockStorageIdResizeVolumeRoute,
  putBlockStorageIdRoute,
  putBlockStorageSnapshotIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blockStorageHandler = app
  .openapi(putBlockStorageIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBlockStorageSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBlockStorageSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlockStorageSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlockStorageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBlockStorageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBlockStorageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlockStorageIdCreateSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlockStorageSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBlockStorageIdResizeVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBlockStorageIdDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlockStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlockStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
