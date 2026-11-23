import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVolumesNameRoute,
  getVolumesNameRoute,
  getVolumesRoute,
  patchVolumesNameRoute,
  postVolumesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumesHandler = app
  .openapi(postVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVolumesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVolumesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
