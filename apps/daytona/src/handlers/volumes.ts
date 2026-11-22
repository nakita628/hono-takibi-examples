import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVolumesVolumeIdRoute,
  getVolumesByNameNameRoute,
  getVolumesRoute,
  getVolumesVolumeIdRoute,
  postVolumesRoute,
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
  .openapi(getVolumesByNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
