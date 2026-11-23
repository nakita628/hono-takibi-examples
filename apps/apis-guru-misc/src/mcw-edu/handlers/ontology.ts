import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOntologyOntAccIdRoute,
  getOntologyTermAccId1AccId2Route,
  getOntologyTermAccIdRoute,
} from '../routes'

export const getOntologyOntAccIdRouteHandler: RouteHandler<
  typeof getOntologyOntAccIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOntologyTermAccId1AccId2RouteHandler: RouteHandler<
  typeof getOntologyTermAccId1AccId2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOntologyTermAccIdRouteHandler: RouteHandler<
  typeof getOntologyTermAccIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
