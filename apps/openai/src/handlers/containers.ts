import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getContainersRoute,
  postContainersRoute,
  getContainersContainerIdRoute,
  deleteContainersContainerIdRoute,
  postContainersContainerIdFilesRoute,
  getContainersContainerIdFilesRoute,
  getContainersContainerIdFilesFileIdRoute,
  deleteContainersContainerIdFilesFileIdRoute,
  getContainersContainerIdFilesFileIdContentRoute,
} from '../routes'

export const getContainersRouteHandler: RouteHandler<typeof getContainersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postContainersRouteHandler: RouteHandler<typeof postContainersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getContainersContainerIdRouteHandler: RouteHandler<
  typeof getContainersContainerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteContainersContainerIdRouteHandler: RouteHandler<
  typeof deleteContainersContainerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postContainersContainerIdFilesRouteHandler: RouteHandler<
  typeof postContainersContainerIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContainersContainerIdFilesRouteHandler: RouteHandler<
  typeof getContainersContainerIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContainersContainerIdFilesFileIdRouteHandler: RouteHandler<
  typeof getContainersContainerIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteContainersContainerIdFilesFileIdRouteHandler: RouteHandler<
  typeof deleteContainersContainerIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContainersContainerIdFilesFileIdContentRouteHandler: RouteHandler<
  typeof getContainersContainerIdFilesFileIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
