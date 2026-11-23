import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDisksDiskIdRoute,
  getDisksDiskIdRoute,
  getDisksDiskIdSnapshotsRoute,
  getDisksRoute,
  patchDisksDiskIdRoute,
  postDisksDiskIdSnapshotsRestoreRoute,
  postDisksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disksHandler = app
  .openapi(getDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDisksDiskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDisksDiskIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDisksDiskIdSnapshotsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
