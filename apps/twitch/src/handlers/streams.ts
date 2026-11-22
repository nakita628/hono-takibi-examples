import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStreamsFollowedRoute,
  getStreamsKeyRoute,
  getStreamsMarkersRoute,
  getStreamsRoute,
  postStreamsMarkersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamsHandler = app
  .openapi(getStreamsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsFollowedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStreamsMarkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsMarkersRoute, (c) => {
    throw new Error('Not implemented')
  })
