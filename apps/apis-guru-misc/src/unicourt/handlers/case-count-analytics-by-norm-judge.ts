import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseCountAnalyticsByNormJudgeRoute } from '../routes'

const app = new OpenAPIHono()

export const caseCountAnalyticsByNormJudgeHandler = app.openapi(
  getCaseCountAnalyticsByNormJudgeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
