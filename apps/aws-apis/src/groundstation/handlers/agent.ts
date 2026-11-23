import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAgentAgentIdConfigurationRoute,
  postAgentRoute,
  putAgentAgentIdRoute,
} from '../routes'

export const getAgentAgentIdConfigurationRouteHandler: RouteHandler<
  typeof getAgentAgentIdConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAgentRouteHandler: RouteHandler<typeof postAgentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAgentAgentIdRouteHandler: RouteHandler<typeof putAgentAgentIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
