import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postKGuestGuestSpaceIdV1BulkRequestJsonRoute,
  postKV1BulkRequestJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkrequestsHandler = app
  .openapi(postKGuestGuestSpaceIdV1BulkRequestJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1BulkRequestJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
