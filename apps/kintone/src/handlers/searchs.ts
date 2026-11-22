import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postKGuestGuestSpaceIdV1SearchJsonRoute,
  postKGuestV1SearchJsonRoute,
  postKV1SearchJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchsHandler = app
  .openapi(postKGuestGuestSpaceIdV1SearchJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestV1SearchJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1SearchJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
