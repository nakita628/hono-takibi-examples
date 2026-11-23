import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAlbumsRoute,
  deleteMeAudiobooksRoute,
  deleteMeEpisodesRoute,
  deleteMeFollowingRoute,
  deleteMeLibraryRoute,
  deleteMeShowsRoute,
  deleteMeTracksRoute,
  getMeAlbumsContainsRoute,
  getMeAlbumsRoute,
  getMeAudiobooksContainsRoute,
  getMeAudiobooksRoute,
  getMeEpisodesContainsRoute,
  getMeEpisodesRoute,
  getMeFollowingContainsRoute,
  getMeFollowingRoute,
  getMeLibraryContainsRoute,
  getMePlayerCurrentlyPlayingRoute,
  getMePlayerDevicesRoute,
  getMePlayerQueueRoute,
  getMePlayerRecentlyPlayedRoute,
  getMePlayerRoute,
  getMePlaylistsRoute,
  getMeRoute,
  getMeShowsContainsRoute,
  getMeShowsRoute,
  getMeTopArtistsRoute,
  getMeTopTracksRoute,
  getMeTracksContainsRoute,
  getMeTracksRoute,
  postMePlayerNextRoute,
  postMePlayerPreviousRoute,
  postMePlayerQueueRoute,
  postMePlaylistsRoute,
  putMeAlbumsRoute,
  putMeAudiobooksRoute,
  putMeEpisodesRoute,
  putMeFollowingRoute,
  putMeLibraryRoute,
  putMePlayerPauseRoute,
  putMePlayerPlayRoute,
  putMePlayerRepeatRoute,
  putMePlayerRoute,
  putMePlayerSeekRoute,
  putMePlayerShuffleRoute,
  putMePlayerVolumeRoute,
  putMeShowsRoute,
  putMeTracksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meHandler = app
  .openapi(getMeAudiobooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeAudiobooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAudiobooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAudiobooksContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeLibraryContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAlbumsContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTracksContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeEpisodesContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeShowsContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeFollowingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowingContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlayerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePlayerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlayerDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlayerCurrentlyPlayingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePlayerPlayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePlayerPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePlayerNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePlayerPreviousRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePlayerSeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePlayerRepeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePlayerVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMePlayerShuffleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlayerRecentlyPlayedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlayerQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePlayerQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTopArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeTopTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
