import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingSegmentsSegmentIdRoute,
  getMarketingSegmentsRoute,
  getMarketingSegmentsSegmentIdRoute,
  patchMarketingSegmentsSegmentIdRoute,
  postMarketingSegmentsDeleteRoute,
  postMarketingSegmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const segmentingContactsHandler = app
  .openapi(getMarketingSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSegmentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
