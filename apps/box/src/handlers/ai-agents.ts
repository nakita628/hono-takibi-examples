import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAiAgentsAgentIdRoute,
  getAiAgentsAgentIdRoute,
  getAiAgentsRoute,
  postAiAgentsRoute,
  putAiAgentsAgentIdRoute,
} from '../routes'

export const getAiAgentsRouteHandler: RouteHandler<typeof getAiAgentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAiAgentsRouteHandler: RouteHandler<typeof postAiAgentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAiAgentsAgentIdRouteHandler: RouteHandler<typeof putAiAgentsAgentIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAiAgentsAgentIdRouteHandler: RouteHandler<typeof getAiAgentsAgentIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAiAgentsAgentIdRouteHandler: RouteHandler<
  typeof deleteAiAgentsAgentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
