import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTimelineIdRoute,
  deleteTimelineItemIdAttachmentsAttachmentIdRoute,
  getTimelineIdRoute,
  getTimelineItemIdAttachmentsAttachmentIdRoute,
  getTimelineItemIdAttachmentsRoute,
  getTimelineRoute,
  patchTimelineIdRoute,
  postTimelineItemIdAttachmentsRoute,
  postTimelineRoute,
  putTimelineIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timelineHandler = app
  .openapi(getTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTimelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTimelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTimelineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimelineItemIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimelineItemIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTimelineItemIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimelineItemIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
