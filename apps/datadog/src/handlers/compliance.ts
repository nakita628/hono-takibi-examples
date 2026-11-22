import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ComplianceFindingsRuleBasedViewRoute } from '../routes'

const app = new OpenAPIHono()

export const complianceHandler = app.openapi(getApiV2ComplianceFindingsRuleBasedViewRoute, (c) => {
  throw new Error('Not implemented')
})
