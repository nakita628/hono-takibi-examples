import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRoomsRoomIdActionsGenerateJoinClientTokenRoute,
  postRoomsRoomIdActionsRefreshClientTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomsClientTokensHandler = app
  .openapi(postRoomsRoomIdActionsGenerateJoinClientTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoomsRoomIdActionsRefreshClientTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
