import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getKGuestGuestSpaceIdV1FileJsonRoute,
  getKV1FileJsonRoute,
  postKGuestGuestSpaceIdV1FileJsonRoute,
  postKV1FileJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getKGuestGuestSpaceIdV1FileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1FileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1FileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1FileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
