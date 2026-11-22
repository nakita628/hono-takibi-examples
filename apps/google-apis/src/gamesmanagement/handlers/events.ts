import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGamesV1managementEventsEventIdResetForAllPlayersRoute,
  postGamesV1managementEventsEventIdResetRoute,
  postGamesV1managementEventsResetAllForAllPlayersRoute,
  postGamesV1managementEventsResetMultipleForAllPlayersRoute,
  postGamesV1managementEventsResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(postGamesV1managementEventsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementEventsResetAllForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementEventsResetMultipleForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementEventsEventIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGamesV1managementEventsEventIdResetForAllPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
