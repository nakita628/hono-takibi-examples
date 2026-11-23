import { OpenAPIHono } from '@hono/zod-openapi'
import { getJudgeJudgeIdRoute } from '../routes'

const app = new OpenAPIHono()

export const judgeHandler = app.openapi(getJudgeJudgeIdRoute, (c) => {
  throw new Error('Not implemented')
})
