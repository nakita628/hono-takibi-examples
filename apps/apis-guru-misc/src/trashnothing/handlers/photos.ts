import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhotosPhotoIdRoute,
  getPhotosMultipleRoute,
  postPhotosPhotoIdRotateRoute,
  postPhotosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const photosHandler = app
  .openapi(postPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhotosMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhotosPhotoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhotosPhotoIdRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
