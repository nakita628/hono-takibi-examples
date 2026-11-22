import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2BitsAiInvestigationsIdRoute,
  getApiV2BitsAiInvestigationsRoute,
  postApiV2BitsAiInvestigationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bitsAIHandler = app
  .openapi(getApiV2BitsAiInvestigationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BitsAiInvestigationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BitsAiInvestigationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
