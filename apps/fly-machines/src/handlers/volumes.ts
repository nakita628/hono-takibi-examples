import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppNameVolumesVolumeIdRoute,
  getAppsAppNameVolumesRoute,
  getAppsAppNameVolumesVolumeIdRoute,
  getAppsAppNameVolumesVolumeIdSnapshotsRoute,
  postAppsAppNameVolumesRoute,
  postAppsAppNameVolumesVolumeIdRoute,
  postAppsAppNameVolumesVolumeIdSnapshotsRoute,
  putAppsAppNameVolumesVolumeIdExtendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumesHandler = app
  .openapi(getAppsAppNameVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppNameVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameVolumesVolumeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppsAppNameVolumesVolumeIdExtendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppNameVolumesVolumeIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppNameVolumesVolumeIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
