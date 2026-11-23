import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserPhotoRoute,
  getUserFiltersettingsEmployerIdRoute,
  getUserPhotoRoute,
  getUserRoute,
  postUserPhotoRoute,
  putUserFiltersettingsEmployerIdRoute,
  putUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserFiltersettingsEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserFiltersettingsEmployerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
