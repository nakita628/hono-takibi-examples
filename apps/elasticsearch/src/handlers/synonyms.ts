import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSynonymsIdRoute,
  deleteSynonymsSetIdRuleIdRoute,
  getSynonymsIdRoute,
  getSynonymsRoute,
  getSynonymsSetIdRuleIdRoute,
  putSynonymsIdRoute,
  putSynonymsSetIdRuleIdRoute,
} from '../routes'

export const getSynonymsIdRouteHandler: RouteHandler<typeof getSynonymsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSynonymsIdRouteHandler: RouteHandler<typeof putSynonymsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSynonymsIdRouteHandler: RouteHandler<typeof deleteSynonymsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSynonymsSetIdRuleIdRouteHandler: RouteHandler<
  typeof getSynonymsSetIdRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSynonymsSetIdRuleIdRouteHandler: RouteHandler<
  typeof putSynonymsSetIdRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSynonymsSetIdRuleIdRouteHandler: RouteHandler<
  typeof deleteSynonymsSetIdRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSynonymsRouteHandler: RouteHandler<typeof getSynonymsRoute> = async (c) => {
  throw new Error('Not implemented')
}
