import type { RouteHandler } from '@hono/zod-openapi'
import type { getOwlOntologyDlqueryQueryRoute, getOwlOntologySparqlQueryRoute } from '../routes'

export const getOwlOntologyDlqueryQueryRouteHandler: RouteHandler<
  typeof getOwlOntologyDlqueryQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOwlOntologySparqlQueryRouteHandler: RouteHandler<
  typeof getOwlOntologySparqlQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
