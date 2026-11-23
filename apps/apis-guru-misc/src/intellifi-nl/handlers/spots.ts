import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSpotsIdRoute,
  getSpotsIdSetsRoute,
  getSpotsIdSetsSetIdRoute,
  getSpotsRoute,
  postSpotsIdSetsRoute,
  putSpotsIdRoute,
  putSpotsIdSetsSetIdRoute,
} from '../routes'

export const getSpotsRouteHandler: RouteHandler<typeof getSpotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpotsIdRouteHandler: RouteHandler<typeof getSpotsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSpotsIdRouteHandler: RouteHandler<typeof putSpotsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpotsIdSetsRouteHandler: RouteHandler<typeof getSpotsIdSetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSpotsIdSetsRouteHandler: RouteHandler<typeof postSpotsIdSetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpotsIdSetsSetIdRouteHandler: RouteHandler<
  typeof getSpotsIdSetsSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSpotsIdSetsSetIdRouteHandler: RouteHandler<
  typeof putSpotsIdSetsSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
