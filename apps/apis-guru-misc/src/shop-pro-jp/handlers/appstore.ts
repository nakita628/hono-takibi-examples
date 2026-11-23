import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppstoreV1InstallationJsonRoute,
  deleteAppstoreV1ScriptTagsScriptTagIdJsonRoute,
  getAppstoreV1ScriptTagsJsonRoute,
  getAppstoreV1ScriptTagsScriptTagIdJsonRoute,
  postAppstoreV1ApplicationChargesJsonRoute,
  postAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonRoute,
  postAppstoreV1ScriptTagsJsonRoute,
  putAppstoreV1ScriptTagsScriptTagIdJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appstoreHandler = app
  .openapi(postAppstoreV1ApplicationChargesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppstoreV1InstallationJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
