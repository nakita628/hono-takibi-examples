import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVolumesVolumeIdRoute,
  getVolumesRoute,
  getVolumesVolumeIdRoute,
  postVolumesRoute,
  postVolumesVolumeIdAttachRoute,
  postVolumesVolumeIdCloneRoute,
  postVolumesVolumeIdDetachRoute,
  postVolumesVolumeIdResizeRoute,
  putVolumesVolumeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumesHandler = app
  .openapi(getVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesVolumeIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesVolumeIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesVolumeIdDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesVolumeIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
