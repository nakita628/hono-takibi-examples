import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAlbumsAlbumIdRoute,
  deleteUsersUserIdAlbumsAlbumIdRoute,
  getMeAlbumsAlbumIdRoute,
  getMeAlbumsRoute,
  getUsersUserIdAlbumsAlbumIdRoute,
  getUsersUserIdAlbumsRoute,
  patchMeAlbumsAlbumIdRoute,
  patchUsersUserIdAlbumsAlbumIdRoute,
  postMeAlbumsRoute,
  postUsersUserIdAlbumsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const albumsEssentialsHandler = app
  .openapi(getMeAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
