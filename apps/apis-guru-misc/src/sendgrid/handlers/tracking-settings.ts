import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTrackingSettingsClickRoute,
  getTrackingSettingsGoogleAnalyticsRoute,
  getTrackingSettingsOpenRoute,
  getTrackingSettingsRoute,
  getTrackingSettingsSubscriptionRoute,
  patchTrackingSettingsClickRoute,
  patchTrackingSettingsGoogleAnalyticsRoute,
  patchTrackingSettingsOpenRoute,
  patchTrackingSettingsSubscriptionRoute,
} from '../routes'

export const getTrackingSettingsRouteHandler: RouteHandler<
  typeof getTrackingSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrackingSettingsClickRouteHandler: RouteHandler<
  typeof getTrackingSettingsClickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTrackingSettingsClickRouteHandler: RouteHandler<
  typeof patchTrackingSettingsClickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrackingSettingsGoogleAnalyticsRouteHandler: RouteHandler<
  typeof getTrackingSettingsGoogleAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTrackingSettingsGoogleAnalyticsRouteHandler: RouteHandler<
  typeof patchTrackingSettingsGoogleAnalyticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrackingSettingsOpenRouteHandler: RouteHandler<
  typeof getTrackingSettingsOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTrackingSettingsOpenRouteHandler: RouteHandler<
  typeof patchTrackingSettingsOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTrackingSettingsSubscriptionRouteHandler: RouteHandler<
  typeof getTrackingSettingsSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTrackingSettingsSubscriptionRouteHandler: RouteHandler<
  typeof patchTrackingSettingsSubscriptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
