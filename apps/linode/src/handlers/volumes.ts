import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionVolumesVolumeIdRoute,
  getApiVersionLinodeInstancesLinodeIdVolumesRoute,
  getApiVersionVolumesRoute,
  getApiVersionVolumesVolumeIdRoute,
  postApiVersionVolumesRoute,
  postApiVersionVolumesVolumeIdAttachRoute,
  postApiVersionVolumesVolumeIdCloneRoute,
  postApiVersionVolumesVolumeIdDetachRoute,
  postApiVersionVolumesVolumeIdResizeRoute,
  putApiVersionVolumesVolumeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumesHandler = app
  .openapi(getApiVersionLinodeInstancesLinodeIdVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVolumesVolumeIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVolumesVolumeIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVolumesVolumeIdDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionVolumesVolumeIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
