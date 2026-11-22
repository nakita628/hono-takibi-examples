import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PrivateAutomationsEvaluatorsIdLogsRoute,
  getV1PrivateAutomationsEvaluatorsIdRoute,
  getV1PrivateAutomationsEvaluatorsRoute,
  patchV1PrivateAutomationsEvaluatorsIdRoute,
  postV1PrivateAutomationsEvaluatorsDeleteRoute,
  postV1PrivateAutomationsEvaluatorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const automationRuleEvaluatorsHandler = app
  .openapi(getV1PrivateAutomationsEvaluatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAutomationsEvaluatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAutomationsEvaluatorsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAutomationsEvaluatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateAutomationsEvaluatorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAutomationsEvaluatorsIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
