import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserIdPhotoRoute,
  getUsersUserIdPhotosProfilePhotoIdRoute,
  getUsersUserIdPhotosProfilePhotoIdValueRoute,
  getUsersUserIdPhotosRoute,
  getUsersUserIdPhotoValueRoute,
  patchUsersUserIdPhotoRoute,
  putUsersUserIdPhotosProfilePhotoIdValueRoute,
  putUsersUserIdPhotoValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersProfilePhotoHandler = app
  .openapi(getUsersUserIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPhotosProfilePhotoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPhotosProfilePhotoIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdPhotosProfilePhotoIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
