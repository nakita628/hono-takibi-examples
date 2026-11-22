import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUsersCurrentFollowedTagsTagIdRoute,
  deleteApiUsersIdMessagesRoute,
  deleteApiUsersProfileCommentsCommentIdRoute,
  getApiUsersCurrentAlbumCollectionStatusesAlbumIdRoute,
  getApiUsersCurrentFollowedArtistsArtistIdRoute,
  getApiUsersCurrentRatedSongsSongIdRoute,
  getApiUsersCurrentRoute,
  getApiUsersIdAlbumCollectionStatusesAlbumIdRoute,
  getApiUsersIdAlbumsRoute,
  getApiUsersIdEventsRoute,
  getApiUsersIdFollowedArtistsArtistIdRoute,
  getApiUsersIdFollowedArtistsRoute,
  getApiUsersIdMessagesRoute,
  getApiUsersIdProfileCommentsRoute,
  getApiUsersIdRatedSongsRoute,
  getApiUsersIdRatedSongsSongIdRoute,
  getApiUsersIdRoute,
  getApiUsersIdSongListsRoute,
  getApiUsersMessagesMessageIdRoute,
  getApiUsersNamesRoute,
  getApiUsersRoute,
  postApiUsersCurrentAlbumsAlbumIdRoute,
  postApiUsersCurrentFollowedTagsTagIdRoute,
  postApiUsersCurrentRefreshEntryEditRoute,
  postApiUsersCurrentSongTagsSongIdRoute,
  postApiUsersIdMessagesRoute,
  postApiUsersIdProfileCommentsRoute,
  postApiUsersIdReportsRoute,
  postApiUsersIdSettingsSettingNameRoute,
  postApiUsersProfileCommentsCommentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userApiHandler = app
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersCurrentAlbumCollectionStatusesAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersCurrentAlbumsAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersCurrentFollowedArtistsArtistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersCurrentFollowedTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersCurrentFollowedTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersCurrentRatedSongsSongIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersCurrentRefreshEntryEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersCurrentSongTagsSongIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersProfileCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersProfileCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdAlbumCollectionStatusesAlbumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdFollowedArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdFollowedArtistsArtistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdProfileCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersIdProfileCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRatedSongsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRatedSongsSongIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersIdSettingsSettingNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdSongListsRoute, (c) => {
    throw new Error('Not implemented')
  })
