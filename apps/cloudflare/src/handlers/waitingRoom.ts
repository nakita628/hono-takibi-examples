import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute,
  deleteZonesZoneIdWaitingRoomsWaitingRoomIdRoute,
  deleteZonesZoneIdWaitingRoomsWaitingRoomIdRulesRuleIdRoute,
  getAccountsAccountIdWaitingRoomsRoute,
  getZonesZoneIdWaitingRoomsRoute,
  getZonesZoneIdWaitingRoomsSettingsRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdDetailsRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdEventsRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute,
  getZonesZoneIdWaitingRoomsWaitingRoomIdStatusRoute,
  patchZonesZoneIdWaitingRoomsSettingsRoute,
  patchZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute,
  patchZonesZoneIdWaitingRoomsWaitingRoomIdRoute,
  patchZonesZoneIdWaitingRoomsWaitingRoomIdRulesRuleIdRoute,
  postZonesZoneIdWaitingRoomsPreviewRoute,
  postZonesZoneIdWaitingRoomsRoute,
  postZonesZoneIdWaitingRoomsWaitingRoomIdEventsRoute,
  postZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute,
  putZonesZoneIdWaitingRoomsSettingsRoute,
  putZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute,
  putZonesZoneIdWaitingRoomsWaitingRoomIdRoute,
  putZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const waitingRoomHandler = app
  .openapi(getAccountsAccountIdWaitingRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWaitingRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdWaitingRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdWaitingRoomsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWaitingRoomsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdWaitingRoomsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdWaitingRoomsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdWaitingRoomsWaitingRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWaitingRoomsWaitingRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdWaitingRoomsWaitingRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdWaitingRoomsWaitingRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWaitingRoomsWaitingRoomIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdWaitingRoomsWaitingRoomIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWaitingRoomsWaitingRoomIdEventsEventIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdWaitingRoomsWaitingRoomIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdWaitingRoomsWaitingRoomIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdWaitingRoomsWaitingRoomIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWaitingRoomsWaitingRoomIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
