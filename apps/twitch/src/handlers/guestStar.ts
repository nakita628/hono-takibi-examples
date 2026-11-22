import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGuestStarInvitesRoute,
  deleteGuestStarSessionRoute,
  deleteGuestStarSlotRoute,
  getGuestStarChannelSettingsRoute,
  getGuestStarInvitesRoute,
  getGuestStarSessionRoute,
  patchGuestStarSlotRoute,
  patchGuestStarSlotSettingsRoute,
  postGuestStarInvitesRoute,
  postGuestStarSessionRoute,
  postGuestStarSlotRoute,
  putGuestStarChannelSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guestStarHandler = app
  .openapi(getGuestStarChannelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGuestStarChannelSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuestStarSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuestStarSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuestStarSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGuestStarInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuestStarInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuestStarInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuestStarSlotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuestStarSlotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGuestStarSlotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGuestStarSlotSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
