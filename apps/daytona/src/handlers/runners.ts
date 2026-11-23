import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRunnersIdRoute,
  getRunnersBySandboxSandboxIdRoute,
  getRunnersBySnapshotRefRoute,
  getRunnersIdFullRoute,
  getRunnersIdRoute,
  getRunnersMeRoute,
  getRunnersRoute,
  patchRunnersIdDrainingRoute,
  patchRunnersIdSchedulingRoute,
  postRunnersHealthcheckRoute,
  postRunnersRoute,
} from '../routes'

export const getRunnersRouteHandler: RouteHandler<typeof getRunnersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRunnersRouteHandler: RouteHandler<typeof postRunnersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRunnersMeRouteHandler: RouteHandler<typeof getRunnersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRunnersBySandboxSandboxIdRouteHandler: RouteHandler<
  typeof getRunnersBySandboxSandboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRunnersBySnapshotRefRouteHandler: RouteHandler<
  typeof getRunnersBySnapshotRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRunnersIdRouteHandler: RouteHandler<typeof deleteRunnersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRunnersIdRouteHandler: RouteHandler<typeof getRunnersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRunnersIdFullRouteHandler: RouteHandler<typeof getRunnersIdFullRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchRunnersIdSchedulingRouteHandler: RouteHandler<
  typeof patchRunnersIdSchedulingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRunnersIdDrainingRouteHandler: RouteHandler<
  typeof patchRunnersIdDrainingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRunnersHealthcheckRouteHandler: RouteHandler<
  typeof postRunnersHealthcheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}
