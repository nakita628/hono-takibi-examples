import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsEventsEventUuidIndexRoute,
  deleteEventsNotificationsUuidIndexRoute,
  deleteEventsRulesPbmUuidIndexRoute,
  deleteEventsTransportsUuidIndexRoute,
  getEventsEventsActionsIndexRoute,
  getEventsEventsEventUuidIndexRoute,
  getEventsEventsIndexRoute,
  getEventsEventsStatsIndexRoute,
  getEventsEventsTopPerUserIndexRoute,
  getEventsEventsVolumeIndexRoute,
  getEventsNotificationsIndexRoute,
  getEventsNotificationsUuidIndexRoute,
  getEventsNotificationsUuidUsedByIndexRoute,
  getEventsRulesIndexRoute,
  getEventsRulesPbmUuidIndexRoute,
  getEventsRulesPbmUuidUsedByIndexRoute,
  getEventsTransportsIndexRoute,
  getEventsTransportsUuidIndexRoute,
  getEventsTransportsUuidUsedByIndexRoute,
  patchEventsEventsEventUuidIndexRoute,
  patchEventsNotificationsUuidIndexRoute,
  patchEventsRulesPbmUuidIndexRoute,
  patchEventsTransportsUuidIndexRoute,
  postEventsEventsExportIndexRoute,
  postEventsEventsIndexRoute,
  postEventsNotificationsMarkAllSeenIndexRoute,
  postEventsRulesIndexRoute,
  postEventsTransportsIndexRoute,
  postEventsTransportsUuidTestIndexRoute,
  putEventsEventsEventUuidIndexRoute,
  putEventsNotificationsUuidIndexRoute,
  putEventsRulesPbmUuidIndexRoute,
  putEventsTransportsUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventsEventUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsEventsEventUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventsEventsEventUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsEventsEventUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventsActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEventsExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventsStatsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventsTopPerUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventsVolumeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsNotificationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsNotificationsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsNotificationsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventsNotificationsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsNotificationsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsNotificationsUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsNotificationsMarkAllSeenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsRulesPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsRulesPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventsRulesPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsRulesPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsRulesPbmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsTransportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsTransportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsTransportsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsTransportsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventsTransportsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsTransportsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsTransportsUuidTestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsTransportsUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
