import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute,
  postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const breakoutRoomHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenBroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenAttendeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRequestAssistanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionBreakoutRoomsTokenSwitchRoute, (c) => {
    throw new Error('Not implemented')
  })
