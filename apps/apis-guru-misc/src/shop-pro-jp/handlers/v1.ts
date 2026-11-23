import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1InlineScriptTagsInlineScriptTagIdJsonRoute,
  deleteV1ScriptTagsScriptTagIdJsonRoute,
  getV1InlineScriptTagsInlineScriptTagIdJsonRoute,
  getV1InlineScriptTagsJsonRoute,
  getV1ScriptTagsJsonRoute,
  getV1ScriptTagsScriptTagIdJsonRoute,
  postV1InlineScriptTagsJsonRoute,
  postV1ScriptTagsJsonRoute,
  putV1InlineScriptTagsInlineScriptTagIdJsonRoute,
  putV1ScriptTagsScriptTagIdJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
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
  .openapi(getV1ScriptTagsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScriptTagsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ScriptTagsScriptTagIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ScriptTagsScriptTagIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ScriptTagsScriptTagIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
