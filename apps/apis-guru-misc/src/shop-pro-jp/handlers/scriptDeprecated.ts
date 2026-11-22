import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ScriptTagsScriptTagIdJsonRoute,
  getV1ScriptTagsJsonRoute,
  getV1ScriptTagsScriptTagIdJsonRoute,
  postV1ScriptTagsJsonRoute,
  putV1ScriptTagsScriptTagIdJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scriptDeprecatedHandler = app
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
