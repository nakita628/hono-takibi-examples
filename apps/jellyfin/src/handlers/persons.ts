import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPersonsNameImagesImageTypeImageIndexRoute,
  getPersonsNameImagesImageTypeRoute,
  getPersonsNameRoute,
  getPersonsRoute,
  headPersonsNameImagesImageTypeImageIndexRoute,
  headPersonsNameImagesImageTypeRoute,
} from '../routes'

export const getPersonsNameImagesImageTypeRouteHandler: RouteHandler<
  typeof getPersonsNameImagesImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headPersonsNameImagesImageTypeRouteHandler: RouteHandler<
  typeof headPersonsNameImagesImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPersonsNameImagesImageTypeImageIndexRouteHandler: RouteHandler<
  typeof getPersonsNameImagesImageTypeImageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headPersonsNameImagesImageTypeImageIndexRouteHandler: RouteHandler<
  typeof headPersonsNameImagesImageTypeImageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPersonsRouteHandler: RouteHandler<typeof getPersonsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPersonsNameRouteHandler: RouteHandler<typeof getPersonsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
