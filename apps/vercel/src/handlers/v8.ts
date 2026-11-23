import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV8ArtifactsRoute,
  deleteV8CertsIdRoute,
  getV8ArtifactsHashRoute,
  getV8ArtifactsStatusRoute,
  getV8CertsIdRoute,
  getV8CertsRoute,
  getV8DeploymentsIdFilesFileIdRoute,
  headV8ArtifactsHashRoute,
  postV8ArtifactsEventsRoute,
  postV8ArtifactsRoute,
  postV8CertsRoute,
  putV8ArtifactsHashRoute,
  putV8CertsRoute,
} from '../routes'

export const postV8ArtifactsEventsRouteHandler: RouteHandler<
  typeof postV8ArtifactsEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV8ArtifactsStatusRouteHandler: RouteHandler<
  typeof getV8ArtifactsStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV8ArtifactsHashRouteHandler: RouteHandler<typeof putV8ArtifactsHashRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV8ArtifactsHashRouteHandler: RouteHandler<typeof getV8ArtifactsHashRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const headV8ArtifactsHashRouteHandler: RouteHandler<
  typeof headV8ArtifactsHashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV8ArtifactsRouteHandler: RouteHandler<typeof postV8ArtifactsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV8ArtifactsRouteHandler: RouteHandler<typeof deleteV8ArtifactsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV8CertsIdRouteHandler: RouteHandler<typeof getV8CertsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV8CertsIdRouteHandler: RouteHandler<typeof deleteV8CertsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV8CertsRouteHandler: RouteHandler<typeof getV8CertsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV8CertsRouteHandler: RouteHandler<typeof postV8CertsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV8CertsRouteHandler: RouteHandler<typeof putV8CertsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV8DeploymentsIdFilesFileIdRouteHandler: RouteHandler<
  typeof getV8DeploymentsIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
