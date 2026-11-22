import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMePhotoRoute,
  getMePhotosProfilePhotoIdRoute,
  getMePhotosProfilePhotoIdValueRoute,
  getMePhotosRoute,
  getMePhotoValueRoute,
  patchMePhotoRoute,
  putMePhotosProfilePhotoIdValueRoute,
  putMePhotoValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meProfilePhotoHandler = app
  .openapi(getMePhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePhotosProfilePhotoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePhotosProfilePhotoIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePhotosProfilePhotoIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
