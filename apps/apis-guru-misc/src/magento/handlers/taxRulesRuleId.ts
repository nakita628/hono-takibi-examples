import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1TaxRulesRuleIdRoute, getV1TaxRulesRuleIdRoute } from '../routes'

const app = new OpenAPIHono()

export const taxRulesRuleIdHandler = app
  .openapi(deleteV1TaxRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
