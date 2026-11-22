import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVolumeCsiVolumeIdActionRoute,
  deleteVolumeCsiVolumeIdRoute,
  deleteVolumesSnapshotRoute,
  getVolumeCsiVolumeIdRoute,
  getVolumesExternalRoute,
  getVolumesRoute,
  getVolumesSnapshotRoute,
  postVolumeCsiVolumeIdActionRoute,
  postVolumeCsiVolumeIdRoute,
  postVolumesRoute,
  postVolumesSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumesHandler = app
  .openapi(deleteVolumeCsiVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumeCsiVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumeCsiVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVolumeCsiVolumeIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumeCsiVolumeIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
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
