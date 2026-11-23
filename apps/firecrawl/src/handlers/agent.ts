import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAgentJobIdRoute,
  getAgentJobIdRoute,
  getAgentJobIdSnapshotsSnapshotIdRoute,
  getAgentJobIdTraceRoute,
  getAgentRoute,
  postAgentRoute,
} from '../routes'

export const getAgentRouteHandler: RouteHandler<typeof getAgentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAgentRouteHandler: RouteHandler<typeof postAgentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAgentJobIdRouteHandler: RouteHandler<typeof getAgentJobIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAgentJobIdRouteHandler: RouteHandler<typeof deleteAgentJobIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAgentJobIdTraceRouteHandler: RouteHandler<typeof getAgentJobIdTraceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAgentJobIdSnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof getAgentJobIdSnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
