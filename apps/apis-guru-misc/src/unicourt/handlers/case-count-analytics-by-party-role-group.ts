import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByPartyRoleGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByPartyRoleGroupHandler = app.openapi(
  getCaseCountAnalyticsByPartyRoleGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
