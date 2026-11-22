import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgentsBlueprintsAgentBlueprintIdRoute,
  getAgentsBlueprintsAgentBlueprintIdRoute,
  getAgentsBlueprintsRoute,
  patchAgentsBlueprintsAgentBlueprintIdRoute,
  postAgentsBlueprintsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsBlueprintsHandler = app
  .openapi(postAgentsBlueprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsBlueprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentsBlueprintsAgentBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgentsBlueprintsAgentBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgentsBlueprintsAgentBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
