import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomRoute,
} from '../routes'

const app = new OpenAPIHono()

export const matrixRoomHandler = app
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionMatrixInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixRoomJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
