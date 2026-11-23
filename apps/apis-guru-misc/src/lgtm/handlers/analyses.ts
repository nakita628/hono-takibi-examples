import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnalysesAnalysisIdAlertsRoute,
  getAnalysesAnalysisIdRoute,
  getAnalysesProjectIdCommitsCommitIdRoute,
  postAnalysesProjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analysesHandler = app
  .openapi(getAnalysesAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesAnalysisIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalysesProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysesProjectIdCommitsCommitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
