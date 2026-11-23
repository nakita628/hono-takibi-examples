import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV8ArtifactsHashRoute,
  getV8ArtifactsStatusRoute,
  headV8ArtifactsHashRoute,
  postV8ArtifactsEventsRoute,
  postV8ArtifactsRoute,
  putV8ArtifactsHashRoute,
} from '../routes'

export const postV8ArtifactsRouteHandler: RouteHandler<typeof postV8ArtifactsRoute> = async (c) => {
  throw new Error('Not implemented')
}

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

export const putV8ArtifactsHashRouteHandler: RouteHandler<typeof putV8ArtifactsHashRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
