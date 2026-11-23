import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStudiosNameImagesImageTypeImageIndexRoute,
  getStudiosNameImagesImageTypeRoute,
  getStudiosNameRoute,
  getStudiosRoute,
  headStudiosNameImagesImageTypeImageIndexRoute,
  headStudiosNameImagesImageTypeRoute,
} from '../routes'

export const getStudiosRouteHandler: RouteHandler<typeof getStudiosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStudiosNameRouteHandler: RouteHandler<typeof getStudiosNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStudiosNameImagesImageTypeRouteHandler: RouteHandler<
  typeof getStudiosNameImagesImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headStudiosNameImagesImageTypeRouteHandler: RouteHandler<
  typeof headStudiosNameImagesImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStudiosNameImagesImageTypeImageIndexRouteHandler: RouteHandler<
  typeof getStudiosNameImagesImageTypeImageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headStudiosNameImagesImageTypeImageIndexRouteHandler: RouteHandler<
  typeof headStudiosNameImagesImageTypeImageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
