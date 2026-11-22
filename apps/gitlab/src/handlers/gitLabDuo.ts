import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV4AiLlmGitCommandRoute,
  postApiV4AiThirdPartyAgentsDirectAccessRoute,
  postApiV4ChatCompletionsRoute,
  postApiV4DuoCodeReviewEvaluationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gitLabDuoHandler = app
  .openapi(postApiV4DuoCodeReviewEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ChatCompletionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiThirdPartyAgentsDirectAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AiLlmGitCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
