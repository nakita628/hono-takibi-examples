import { OpenAPIHono } from '@hono/zod-openapi'
import { getNormJudgeSearchNormJudgeSearchIdRoute, getNormJudgeSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const normJudgeSearchHandler = app
  .openapi(getNormJudgeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNormJudgeSearchNormJudgeSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
