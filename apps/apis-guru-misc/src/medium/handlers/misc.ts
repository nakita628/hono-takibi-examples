import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLatestpostsTopicSlugRoute,
  getRelatedTagsTagRoute,
  getTopfeedsTagModeRoute,
  getTopWriterTopicSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const miscHandler = app
  .openapi(getLatestpostsTopicSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRelatedTagsTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopWriterTopicSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopfeedsTagModeRoute, (c) => {
    throw new Error('Not implemented')
  })
