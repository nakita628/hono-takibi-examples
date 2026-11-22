import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnalysisDetectorModelsAnalysisIdResultsRoute,
  getAnalysisDetectorModelsAnalysisIdRoute,
  postAnalysisDetectorModelsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const analysisHandler = app
  .openapi(getAnalysisDetectorModelsAnalysisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalysisDetectorModelsAnalysisIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalysisDetectorModelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
