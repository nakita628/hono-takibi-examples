import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
  getUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute,
  getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
  patchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute,
  postUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const albumsCustomAlbumThumbnailsHandler = app
  .openapi(getUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAlbumsAlbumIdCustomThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAlbumsAlbumIdCustomThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
