import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1SegmentsSegmentIdTagsIdRoute,
  getApi1SegmentsSegmentIdTagsRoute,
  postApi1SegmentsSegmentIdTagsRoute,
  putApi1SegmentsSegmentIdTagsCodeUpsertRoute,
  putApi1SegmentsSegmentIdTagsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const segmentTagsHandler = app
  .openapi(getApi1SegmentsSegmentIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1SegmentsSegmentIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1SegmentsSegmentIdTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1SegmentsSegmentIdTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1SegmentsSegmentIdTagsCodeUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
