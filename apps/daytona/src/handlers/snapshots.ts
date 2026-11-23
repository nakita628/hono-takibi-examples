import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSnapshotsIdRoute,
  getSnapshotsIdBuildLogsRoute,
  getSnapshotsIdBuildLogsUrlRoute,
  getSnapshotsIdRoute,
  getSnapshotsRoute,
  postSnapshotsIdActivateRoute,
  postSnapshotsIdDeactivateRoute,
  postSnapshotsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app
  .openapi(getSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnapshotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsIdBuildLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsIdBuildLogsUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotsIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotsIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
