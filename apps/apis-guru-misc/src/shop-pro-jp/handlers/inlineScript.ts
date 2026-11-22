import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1InlineScriptTagsInlineScriptTagIdJsonRoute,
  getV1InlineScriptTagsInlineScriptTagIdJsonRoute,
  getV1InlineScriptTagsJsonRoute,
  postV1InlineScriptTagsJsonRoute,
  putV1InlineScriptTagsInlineScriptTagIdJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inlineScriptHandler = app
  .openapi(getV1InlineScriptTagsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InlineScriptTagsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InlineScriptTagsInlineScriptTagIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InlineScriptTagsInlineScriptTagIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InlineScriptTagsInlineScriptTagIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
