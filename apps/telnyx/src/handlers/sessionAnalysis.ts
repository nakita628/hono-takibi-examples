import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSessionAnalysisMetadataRecordTypeRoute,
  getSessionAnalysisMetadataRoute,
  getSessionAnalysisRecordTypeEventIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionAnalysisHandler = app
  .openapi(getSessionAnalysisMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionAnalysisMetadataRecordTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionAnalysisRecordTypeEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
