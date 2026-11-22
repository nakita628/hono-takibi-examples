import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsVipsRoute,
  deleteModerationBansRoute,
  deleteModerationBlockedTermsRoute,
  deleteModerationChatRoute,
  deleteModerationModeratorsRoute,
  deleteModerationSuspiciousUsersRoute,
  getChannelsVipsRoute,
  getModerationAutomodSettingsRoute,
  getModerationBannedRoute,
  getModerationBlockedTermsRoute,
  getModerationChannelsRoute,
  getModerationModeratorsRoute,
  getModerationShieldModeRoute,
  getModerationUnbanRequestsRoute,
  patchModerationUnbanRequestsRoute,
  postChannelsVipsRoute,
  postModerationAutomodMessageRoute,
  postModerationBansRoute,
  postModerationBlockedTermsRoute,
  postModerationEnforcementsStatusRoute,
  postModerationModeratorsRoute,
  postModerationSuspiciousUsersRoute,
  postModerationWarningsRoute,
  putModerationAutomodSettingsRoute,
  putModerationShieldModeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const moderationHandler = app
  .openapi(postModerationEnforcementsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationAutomodMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModerationAutomodSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putModerationAutomodSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModerationBannedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationBansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModerationBansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModerationUnbanRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchModerationUnbanRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModerationBlockedTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationBlockedTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModerationBlockedTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModerationChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModerationChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModerationModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModerationModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsVipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsVipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsVipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putModerationShieldModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModerationShieldModeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationWarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationSuspiciousUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModerationSuspiciousUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
