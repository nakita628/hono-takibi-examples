import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAgentStatusInstanceIdAgentStatusIdRoute,
  getAgentStatusInstanceIdRoute,
  postAgentStatusInstanceIdAgentStatusIdRoute,
  putAgentStatusInstanceIdRoute,
} from '../routes'

export const putAgentStatusInstanceIdRouteHandler: RouteHandler<
  typeof putAgentStatusInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentStatusInstanceIdRouteHandler: RouteHandler<
  typeof getAgentStatusInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentStatusInstanceIdAgentStatusIdRouteHandler: RouteHandler<
  typeof getAgentStatusInstanceIdAgentStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAgentStatusInstanceIdAgentStatusIdRouteHandler: RouteHandler<
  typeof postAgentStatusInstanceIdAgentStatusIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
