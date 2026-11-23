import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVolumesSnapshotRoute,
  getVolumesExternalRoute,
  getVolumesRoute,
  getVolumesSnapshotRoute,
  postVolumesRoute,
  postVolumesSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumesHandler = app
  .openapi(getVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumesExternalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVolumesSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumesSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
