import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVolumesVolumeIDRoute,
  getVolumesRoute,
  getVolumesVolumeIDRoute,
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
  .openapi(getVolumesVolumeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVolumesVolumeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
