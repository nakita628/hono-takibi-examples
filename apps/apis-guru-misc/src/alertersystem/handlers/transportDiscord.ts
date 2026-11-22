import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportDiscordIdRoute,
  getApiTransportDiscordIdRoute,
  getApiTransportDiscordRoute,
  postApiTransportDiscordRoute,
  putApiTransportDiscordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportDiscordHandler = app
  .openapi(getApiTransportDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportDiscordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportDiscordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportDiscordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
