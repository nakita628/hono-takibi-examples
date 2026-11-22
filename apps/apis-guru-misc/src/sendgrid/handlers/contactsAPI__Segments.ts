import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactdbSegmentsSegmentIdRoute,
  getContactdbSegmentsRoute,
  getContactdbSegmentsSegmentIdRecipientsRoute,
  getContactdbSegmentsSegmentIdRoute,
  patchContactdbSegmentsSegmentIdRoute,
  postContactdbSegmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsAPI__SegmentsHandler = app
  .openapi(getContactdbSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactdbSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbSegmentsSegmentIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
