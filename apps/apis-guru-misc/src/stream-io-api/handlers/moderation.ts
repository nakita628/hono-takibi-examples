import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteModerationBanRoute,
  getModerationFlagsMessageRoute,
  postModerationBanRoute,
  postModerationFlagRoute,
  postModerationMuteChannelRoute,
  postModerationMuteRoute,
  postModerationUnflagRoute,
  postModerationUnmuteChannelRoute,
  postModerationUnmuteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const moderationHandler = app
  .openapi(deleteModerationBanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationBanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationFlagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModerationFlagsMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationMuteChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationUnflagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationUnmuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationUnmuteChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
