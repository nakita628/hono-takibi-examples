import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHighlightsHighlightIdRoute,
  getHighlightsHighlightIdRoute,
  getHighlightsRoute,
  patchHighlightsHighlightIdRoute,
  postHighlightsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const highlightsHandler = app
  .openapi(getHighlightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHighlightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHighlightsHighlightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHighlightsHighlightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchHighlightsHighlightIdRoute, (c) => {
    throw new Error('Not implemented')
  })
