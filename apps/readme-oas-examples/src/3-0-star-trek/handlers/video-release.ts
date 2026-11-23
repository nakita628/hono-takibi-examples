import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVideoReleaseRoute,
  getVideoReleaseSearchRoute,
  postVideoReleaseSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoReleaseHandler = app
  .openapi(getVideoReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideoReleaseSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideoReleaseSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
