import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMapsChrChromosomeMapKeyRoute,
  getMapsChrMapKeyRoute,
  getMapsSpeciesTypeKeyRoute,
} from '../routes'

export const getMapsChrChromosomeMapKeyRouteHandler: RouteHandler<
  typeof getMapsChrChromosomeMapKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMapsChrMapKeyRouteHandler: RouteHandler<typeof getMapsChrMapKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMapsSpeciesTypeKeyRouteHandler: RouteHandler<
  typeof getMapsSpeciesTypeKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
