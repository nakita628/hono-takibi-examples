import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMePlayerCurrentlyPlayingRoute,
  getMePlayerDevicesRoute,
  getMePlayerQueueRoute,
  getMePlayerRecentlyPlayedRoute,
  getMePlayerRoute,
  postMePlayerNextRoute,
  postMePlayerPreviousRoute,
  postMePlayerQueueRoute,
  putMePlayerPauseRoute,
  putMePlayerPlayRoute,
  putMePlayerRepeatRoute,
  putMePlayerRoute,
  putMePlayerSeekRoute,
  putMePlayerShuffleRoute,
  putMePlayerVolumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playerHandler = app
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
