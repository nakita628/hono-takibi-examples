import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMePicturesPortraitsetIdRoute,
  deleteUsersUserIdPicturesPortraitsetIdRoute,
  getMePicturesPortraitsetIdRoute,
  getMePicturesRoute,
  getUsersUserIdPicturesPortraitsetIdRoute,
  getUsersUserIdPicturesRoute,
  patchMePicturesPortraitsetIdRoute,
  patchUsersUserIdPicturesPortraitsetIdRoute,
  postMePicturesRoute,
  postUsersUserIdPicturesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersPicturesHandler = app
  .openapi(getMePicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPicturesPortraitsetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
