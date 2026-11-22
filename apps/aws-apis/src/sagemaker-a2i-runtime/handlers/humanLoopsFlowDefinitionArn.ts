import { OpenAPIHono } from '@hono/zod-openapi'
import { getHumanLoopsFlowDefinitionArnRoute } from '../routes'

const app = new OpenAPIHono()

export const humanLoopsFlowDefinitionArnHandler = app.openapi(
  getHumanLoopsFlowDefinitionArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
