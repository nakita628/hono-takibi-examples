import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAgentRunsIdRoute,
  getAgentRunsIdEventsRoute,
  getAgentRunsIdRoute,
  getAgentRunsRoute,
  postAgentRunsIdCancelRoute,
  postAgentRunsIdStopRoute,
  postAgentRunsRoute,
} from '../routes'

export const postAgentRunsRouteHandler: RouteHandler<typeof postAgentRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentRunsRouteHandler: RouteHandler<typeof getAgentRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentRunsIdRouteHandler: RouteHandler<typeof getAgentRunsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAgentRunsIdRouteHandler: RouteHandler<typeof deleteAgentRunsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAgentRunsIdCancelRouteHandler: RouteHandler<
  typeof postAgentRunsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAgentRunsIdStopRouteHandler: RouteHandler<
  typeof postAgentRunsIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentRunsIdEventsRouteHandler: RouteHandler<
  typeof getAgentRunsIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
