import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAlbumsAlbumIdVideosVideoIdRoute,
  deleteUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
  getMeAlbumsAlbumIdVideosRoute,
  getMeAlbumsAlbumIdVideosVideoIdRoute,
  getUsersUserIdAlbumsAlbumIdVideosRoute,
  getUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
  postMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute,
  postUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute,
  putMeAlbumsAlbumIdVideosRoute,
  putMeAlbumsAlbumIdVideosVideoIdRoute,
  putUsersUserIdAlbumsAlbumIdVideosRoute,
  putUsersUserIdAlbumsAlbumIdVideosVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const albumsAlbumVideosHandler = app
  .openapi(getMeAlbumsAlbumIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeAlbumsAlbumIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdAlbumsAlbumIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdAlbumsAlbumIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAlbumsAlbumIdVideosVideoIdSetAlbumThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
