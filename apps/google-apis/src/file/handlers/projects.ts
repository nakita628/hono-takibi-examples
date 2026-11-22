import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentBackupsRoute,
  getV1ParentInstancesRoute,
  getV1ParentSnapshotsRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1NameRestoreRoute,
  postV1NameRevertRoute,
  postV1ParentBackupsRoute,
  postV1ParentInstancesRoute,
  postV1ParentSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
