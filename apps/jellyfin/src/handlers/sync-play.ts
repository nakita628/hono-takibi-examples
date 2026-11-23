import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSyncPlayIdRoute,
  getSyncPlayListRoute,
  postSyncPlayBufferingRoute,
  postSyncPlayJoinRoute,
  postSyncPlayLeaveRoute,
  postSyncPlayMovePlaylistItemRoute,
  postSyncPlayNewRoute,
  postSyncPlayNextItemRoute,
  postSyncPlayPauseRoute,
  postSyncPlayPingRoute,
  postSyncPlayPreviousItemRoute,
  postSyncPlayQueueRoute,
  postSyncPlayReadyRoute,
  postSyncPlayRemoveFromPlaylistRoute,
  postSyncPlaySeekRoute,
  postSyncPlaySetIgnoreWaitRoute,
  postSyncPlaySetNewQueueRoute,
  postSyncPlaySetPlaylistItemRoute,
  postSyncPlaySetRepeatModeRoute,
  postSyncPlaySetShuffleModeRoute,
  postSyncPlayStopRoute,
  postSyncPlayUnpauseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const syncPlayHandler = app
  .openapi(getSyncPlayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayBufferingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSyncPlayListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayMovePlaylistItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayNextItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayPreviousItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayReadyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayRemoveFromPlaylistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlaySeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlaySetIgnoreWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlaySetNewQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlaySetPlaylistItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlaySetRepeatModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlaySetShuffleModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSyncPlayUnpauseRoute, (c) => {
    throw new Error('Not implemented')
  })
