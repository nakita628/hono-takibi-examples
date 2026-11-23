import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVolumeCsiVolumeIdActionRoute,
  deleteVolumeCsiVolumeIdRoute,
  getVolumeCsiVolumeIdRoute,
  postVolumeCsiVolumeIdActionRoute,
  postVolumeCsiVolumeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumeHandler = app
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
