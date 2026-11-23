import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAnalyticsRulesRuleNameRoute,
  getAnalyticsEventsRoute,
  getAnalyticsRulesRoute,
  getAnalyticsRulesRuleNameRoute,
  getAnalyticsStatusRoute,
  postAnalyticsEventsRoute,
  postAnalyticsFlushRoute,
  postAnalyticsRulesRoute,
  putAnalyticsRulesRuleNameRoute,
} from '../routes'

export const postAnalyticsEventsRouteHandler: RouteHandler<
  typeof postAnalyticsEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalyticsEventsRouteHandler: RouteHandler<typeof getAnalyticsEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAnalyticsFlushRouteHandler: RouteHandler<typeof postAnalyticsFlushRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAnalyticsStatusRouteHandler: RouteHandler<typeof getAnalyticsStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAnalyticsRulesRouteHandler: RouteHandler<typeof postAnalyticsRulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAnalyticsRulesRouteHandler: RouteHandler<typeof getAnalyticsRulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putAnalyticsRulesRuleNameRouteHandler: RouteHandler<
  typeof putAnalyticsRulesRuleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalyticsRulesRuleNameRouteHandler: RouteHandler<
  typeof getAnalyticsRulesRuleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAnalyticsRulesRuleNameRouteHandler: RouteHandler<
  typeof deleteAnalyticsRulesRuleNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
