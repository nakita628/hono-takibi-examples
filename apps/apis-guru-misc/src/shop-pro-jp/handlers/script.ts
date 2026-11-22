import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppstoreV1ScriptTagsScriptTagIdJsonRoute,
  getAppstoreV1ScriptTagsJsonRoute,
  getAppstoreV1ScriptTagsScriptTagIdJsonRoute,
  postAppstoreV1ScriptTagsJsonRoute,
  putAppstoreV1ScriptTagsScriptTagIdJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scriptHandler = app
  .openapi(getAppstoreV1ScriptTagsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppstoreV1ScriptTagsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppstoreV1ScriptTagsScriptTagIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppstoreV1ScriptTagsScriptTagIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppstoreV1ScriptTagsScriptTagIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
