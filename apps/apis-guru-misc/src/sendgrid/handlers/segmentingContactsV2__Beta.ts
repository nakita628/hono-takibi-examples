import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingSegments20SegmentIdRoute,
  getMarketingSegments20Route,
  getMarketingSegments20SegmentIdRoute,
  patchMarketingSegments20SegmentIdRoute,
  postMarketingSegments20Route,
} from '../routes'

const app = new OpenAPIHono()

export const segmentingContactsV2__BetaHandler = app
  .openapi(getMarketingSegments20Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSegments20Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingSegments20SegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSegments20SegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingSegments20SegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
