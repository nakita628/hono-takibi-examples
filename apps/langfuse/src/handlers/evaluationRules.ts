import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
  getApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
  getApiPublicV2EvaluationRulesRoute,
  patchApiPublicV2EvaluationRulesEvaluationRuleIdRoute,
  postApiPublicV2EvaluationRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const evaluationRulesHandler = app
  .openapi(postApiPublicV2EvaluationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2EvaluationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2EvaluationRulesEvaluationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicV2EvaluationRulesEvaluationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicV2EvaluationRulesEvaluationRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
