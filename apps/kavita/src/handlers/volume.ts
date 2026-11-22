import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVolumeRoute,
  getApiVolumeRoute,
  postApiVolumeMultipleRoute,
  postApiVolumeUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumeHandler = app
  .openapi(getApiVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVolumeUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVolumeMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
