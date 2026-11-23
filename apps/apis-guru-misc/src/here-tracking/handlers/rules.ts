import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRulesV4Route,
  deleteRulesV4RuleIdRoute,
  getRulesV4HealthRoute,
  getRulesV4Route,
  getRulesV4RuleIdRoute,
  getRulesV4VersionRoute,
  postRulesV4Route,
  putRulesV4RuleIdRoute,
} from '../routes'

export const deleteRulesV4RouteHandler: RouteHandler<typeof deleteRulesV4Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getRulesV4RouteHandler: RouteHandler<typeof getRulesV4Route> = async (c) => {
  throw new Error('Not implemented')
}

export const postRulesV4RouteHandler: RouteHandler<typeof postRulesV4Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getRulesV4HealthRouteHandler: RouteHandler<typeof getRulesV4HealthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRulesV4VersionRouteHandler: RouteHandler<typeof getRulesV4VersionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteRulesV4RuleIdRouteHandler: RouteHandler<
  typeof deleteRulesV4RuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRulesV4RuleIdRouteHandler: RouteHandler<typeof getRulesV4RuleIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putRulesV4RuleIdRouteHandler: RouteHandler<typeof putRulesV4RuleIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
