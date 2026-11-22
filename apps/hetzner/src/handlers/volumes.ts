import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVolumesIdRoute,
  getVolumesIdRoute,
  getVolumesRoute,
  postVolumesRoute,
  putVolumesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const volumesHandler = app
  .openapi(getVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVolumesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVolumesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVolumesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVolumesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
