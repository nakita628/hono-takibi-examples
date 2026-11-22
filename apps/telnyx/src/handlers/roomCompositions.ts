import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoomCompositionsRoomCompositionIdRoute,
  getRoomCompositionsRoomCompositionIdRoute,
  getRoomCompositionsRoute,
  postRoomCompositionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomCompositionsHandler = app
  .openapi(getRoomCompositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoomCompositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoomCompositionsRoomCompositionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomCompositionsRoomCompositionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
