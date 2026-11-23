import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInboundAttachmentsDownloadTokenRoute,
  getInboundEventsRoute,
  getInboundEventsUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inboundHandler = app
  .openapi(getInboundEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboundEventsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboundAttachmentsDownloadTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
