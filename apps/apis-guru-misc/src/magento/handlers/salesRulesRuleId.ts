import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SalesRulesRuleIdRoute,
  getV1SalesRulesRuleIdRoute,
  putV1SalesRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesRulesRuleIdHandler = app
  .openapi(deleteV1SalesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
