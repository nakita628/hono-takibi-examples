import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAgentsBlueprintsAgentBlueprintIdTokensRoute,
  postAgentsBlueprintsAgentBlueprintIdTokensValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsBlueprintsTokensHandler = app
  .openapi(postAgentsBlueprintsAgentBlueprintIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentsBlueprintsAgentBlueprintIdTokensValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
