import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAgentWorkersGetMinVersionRoute,
  getAgentWorkersListBlacklistedTokensRoute,
  postAgentWorkersBlacklistTokenRoute,
  postAgentWorkersCreateAgentTokenRoute,
  postAgentWorkersRemoveBlacklistTokenRoute,
} from '../routes'

export const postAgentWorkersCreateAgentTokenRouteHandler: RouteHandler<
  typeof postAgentWorkersCreateAgentTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAgentWorkersBlacklistTokenRouteHandler: RouteHandler<
  typeof postAgentWorkersBlacklistTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAgentWorkersRemoveBlacklistTokenRouteHandler: RouteHandler<
  typeof postAgentWorkersRemoveBlacklistTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentWorkersListBlacklistedTokensRouteHandler: RouteHandler<
  typeof getAgentWorkersListBlacklistedTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentWorkersGetMinVersionRouteHandler: RouteHandler<
  typeof getAgentWorkersGetMinVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
