import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByPartyRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByPartyRoleHandler = app.openapi(
  getCaseCountAnalyticsByPartyRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
