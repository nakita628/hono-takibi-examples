import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSandboxesRoute,
  getSandboxesSandboxIdExecsExecIdRoute,
  getSandboxesSandboxIdExecsRoute,
  getSandboxesSandboxIdRoute,
  postSandboxesRoute,
  postSandboxesSandboxIdFilesOperationTokenRoute,
  postSandboxesSandboxIdRunsOperationTokenRoute,
  postSandboxesSandboxIdSnapshotsRoute,
  postSandboxesSandboxIdSuspendRoute,
  postSandboxesSandboxIdTerminateRoute,
} from '../routes'

export const postSandboxesRouteHandler: RouteHandler<typeof postSandboxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSandboxesRouteHandler: RouteHandler<typeof getSandboxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSandboxesSandboxIdRouteHandler: RouteHandler<
  typeof getSandboxesSandboxIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSandboxesSandboxIdExecsRouteHandler: RouteHandler<
  typeof getSandboxesSandboxIdExecsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSandboxesSandboxIdExecsExecIdRouteHandler: RouteHandler<
  typeof getSandboxesSandboxIdExecsExecIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSandboxesSandboxIdTerminateRouteHandler: RouteHandler<
  typeof postSandboxesSandboxIdTerminateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSandboxesSandboxIdSuspendRouteHandler: RouteHandler<
  typeof postSandboxesSandboxIdSuspendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSandboxesSandboxIdSnapshotsRouteHandler: RouteHandler<
  typeof postSandboxesSandboxIdSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSandboxesSandboxIdRunsOperationTokenRouteHandler: RouteHandler<
  typeof postSandboxesSandboxIdRunsOperationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSandboxesSandboxIdFilesOperationTokenRouteHandler: RouteHandler<
  typeof postSandboxesSandboxIdFilesOperationTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
