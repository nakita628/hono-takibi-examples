import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessPreviewAnalyzerArnHandler,
  accessPreviewHandler,
  analyzedResourceAnalyzerArnResourceArnHandler,
  analyzedResourceHandler,
  analyzerHandler,
  archiveRuleHandler,
  findingHandler,
  policyHandler,
  resourceHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', archiveRuleHandler)
  .route('/', policyHandler)
  .route('/', accessPreviewHandler)
  .route('/', analyzerHandler)
  .route('/', analyzedResourceAnalyzerArnResourceArnHandler)
  .route('/', findingHandler)
  .route('/', accessPreviewAnalyzerArnHandler)
  .route('/', analyzedResourceHandler)
  .route('/', tagsHandler)
  .route('/', resourceHandler)

export default app
