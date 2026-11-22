import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicV2EvaluatorsEvaluatorIdRoute,
  getApiPublicV2EvaluatorsEvaluatorIdRoute,
  getApiPublicV2EvaluatorsEvaluatorIdVersionsRoute,
  getApiPublicV2EvaluatorsRoute,
  patchApiPublicV2EvaluatorsEvaluatorIdRoute,
  postApiPublicV2EvaluatorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const evaluatorsHandler = app
  .openapi(postApiPublicV2EvaluatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2EvaluatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2EvaluatorsEvaluatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicV2EvaluatorsEvaluatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicV2EvaluatorsEvaluatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicV2EvaluatorsEvaluatorIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
