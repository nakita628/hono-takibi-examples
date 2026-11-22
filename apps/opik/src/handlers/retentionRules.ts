import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateRetentionRulesRuleIdRoute,
  getV1PrivateRetentionRulesRoute,
  getV1PrivateRetentionRulesRuleIdRoute,
  postV1PrivateRetentionRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const retentionRulesHandler = app
  .openapi(getV1PrivateRetentionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateRetentionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateRetentionRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateRetentionRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
