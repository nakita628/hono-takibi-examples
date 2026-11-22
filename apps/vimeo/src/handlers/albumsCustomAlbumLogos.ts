import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
  getUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
  getUsersUserIdAlbumsAlbumIdLogosRoute,
  patchUsersUserIdAlbumsAlbumIdLogosLogoIdRoute,
  postUsersUserIdAlbumsAlbumIdLogosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const albumsCustomAlbumLogosHandler = app
  .openapi(getUsersUserIdAlbumsAlbumIdLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAlbumsAlbumIdLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAlbumsAlbumIdLogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdLogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAlbumsAlbumIdLogosLogoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
