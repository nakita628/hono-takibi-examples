import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppstoreV1InstallationJsonRoute,
  deleteAppstoreV1ScriptTagsScriptTagIdJsonRoute,
  deleteV1InlineScriptTagsInlineScriptTagIdJsonRoute,
  deleteV1ScriptTagsScriptTagIdJsonRoute,
  getAppstoreV1ScriptTagsJsonRoute,
  getAppstoreV1ScriptTagsScriptTagIdJsonRoute,
  getV1InlineScriptTagsInlineScriptTagIdJsonRoute,
  getV1InlineScriptTagsJsonRoute,
  getV1ScriptTagsJsonRoute,
  getV1ScriptTagsScriptTagIdJsonRoute,
  postAppstoreV1ApplicationChargesJsonRoute,
  postAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonRoute,
  postAppstoreV1ScriptTagsJsonRoute,
  postV1InlineScriptTagsJsonRoute,
  postV1ScriptTagsJsonRoute,
  putAppstoreV1ScriptTagsScriptTagIdJsonRoute,
  putV1InlineScriptTagsInlineScriptTagIdJsonRoute,
  putV1ScriptTagsScriptTagIdJsonRoute,
} from './routes'
import {
  deleteAppstoreV1InstallationJsonRouteHandler,
  deleteAppstoreV1ScriptTagsScriptTagIdJsonRouteHandler,
  deleteV1InlineScriptTagsInlineScriptTagIdJsonRouteHandler,
  deleteV1ScriptTagsScriptTagIdJsonRouteHandler,
  getAppstoreV1ScriptTagsJsonRouteHandler,
  getAppstoreV1ScriptTagsScriptTagIdJsonRouteHandler,
  getV1InlineScriptTagsInlineScriptTagIdJsonRouteHandler,
  getV1InlineScriptTagsJsonRouteHandler,
  getV1ScriptTagsJsonRouteHandler,
  getV1ScriptTagsScriptTagIdJsonRouteHandler,
  postAppstoreV1ApplicationChargesJsonRouteHandler,
  postAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonRouteHandler,
  postAppstoreV1ScriptTagsJsonRouteHandler,
  postV1InlineScriptTagsJsonRouteHandler,
  postV1ScriptTagsJsonRouteHandler,
  putAppstoreV1ScriptTagsScriptTagIdJsonRouteHandler,
  putV1InlineScriptTagsInlineScriptTagIdJsonRouteHandler,
  putV1ScriptTagsScriptTagIdJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postAppstoreV1ApplicationChargesJsonRoute,
    postAppstoreV1ApplicationChargesJsonRouteHandler,
  )
  .openapi(deleteAppstoreV1InstallationJsonRoute, deleteAppstoreV1InstallationJsonRouteHandler)
  .openapi(
    postAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonRoute,
    postAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonRouteHandler,
  )
  .openapi(getAppstoreV1ScriptTagsJsonRoute, getAppstoreV1ScriptTagsJsonRouteHandler)
  .openapi(postAppstoreV1ScriptTagsJsonRoute, postAppstoreV1ScriptTagsJsonRouteHandler)
  .openapi(
    deleteAppstoreV1ScriptTagsScriptTagIdJsonRoute,
    deleteAppstoreV1ScriptTagsScriptTagIdJsonRouteHandler,
  )
  .openapi(
    getAppstoreV1ScriptTagsScriptTagIdJsonRoute,
    getAppstoreV1ScriptTagsScriptTagIdJsonRouteHandler,
  )
  .openapi(
    putAppstoreV1ScriptTagsScriptTagIdJsonRoute,
    putAppstoreV1ScriptTagsScriptTagIdJsonRouteHandler,
  )
  .openapi(getV1InlineScriptTagsJsonRoute, getV1InlineScriptTagsJsonRouteHandler)
  .openapi(postV1InlineScriptTagsJsonRoute, postV1InlineScriptTagsJsonRouteHandler)
  .openapi(
    deleteV1InlineScriptTagsInlineScriptTagIdJsonRoute,
    deleteV1InlineScriptTagsInlineScriptTagIdJsonRouteHandler,
  )
  .openapi(
    getV1InlineScriptTagsInlineScriptTagIdJsonRoute,
    getV1InlineScriptTagsInlineScriptTagIdJsonRouteHandler,
  )
  .openapi(
    putV1InlineScriptTagsInlineScriptTagIdJsonRoute,
    putV1InlineScriptTagsInlineScriptTagIdJsonRouteHandler,
  )
  .openapi(getV1ScriptTagsJsonRoute, getV1ScriptTagsJsonRouteHandler)
  .openapi(postV1ScriptTagsJsonRoute, postV1ScriptTagsJsonRouteHandler)
  .openapi(deleteV1ScriptTagsScriptTagIdJsonRoute, deleteV1ScriptTagsScriptTagIdJsonRouteHandler)
  .openapi(getV1ScriptTagsScriptTagIdJsonRoute, getV1ScriptTagsScriptTagIdJsonRouteHandler)
  .openapi(putV1ScriptTagsScriptTagIdJsonRoute, putV1ScriptTagsScriptTagIdJsonRouteHandler)

export default app
