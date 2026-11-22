import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportGotifyIdRoute,
  getApiTransportGotifyIdRoute,
  getApiTransportGotifyRoute,
  postApiTransportGotifyRoute,
  putApiTransportGotifyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportGotifyHandler = app
  .openapi(getApiTransportGotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportGotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportGotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportGotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportGotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
