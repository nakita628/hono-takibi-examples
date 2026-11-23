import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOntologySharedSubjectObjectRoute,
  getOntologySubsetIdRoute,
  getOntologyTermIdGraphRoute,
  getOntologyTermIdRoute,
  getOntologyTermIdSubgraphRoute,
  getOntologyTermIdSubsetsRoute,
} from '../routes'

export const getOntologySharedSubjectObjectRouteHandler: RouteHandler<
  typeof getOntologySharedSubjectObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOntologySubsetIdRouteHandler: RouteHandler<
  typeof getOntologySubsetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOntologyTermIdRouteHandler: RouteHandler<typeof getOntologyTermIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOntologyTermIdGraphRouteHandler: RouteHandler<
  typeof getOntologyTermIdGraphRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOntologyTermIdSubgraphRouteHandler: RouteHandler<
  typeof getOntologyTermIdSubgraphRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOntologyTermIdSubsetsRouteHandler: RouteHandler<
  typeof getOntologyTermIdSubsetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
