import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCaseExportCallbacksCaseExportCallbackIdRoute,
  getCaseExportCallbacksRoute,
  getCaseExportCaseIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caseExportHandler = app
  .openapi(getCaseExportCallbacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseExportCallbacksCaseExportCallbackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseExportCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
