import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PhotoPhotoIdRoute,
  getV1PhotoPhotoIdRoute,
  postV1PhotoRoute,
  postV1PhotoStartUploadRoute,
  putV1PhotoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const photoHandler = app
  .openapi(postV1PhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PhotoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PhotoPhotoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PhotoPhotoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PhotoStartUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
