import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAlertGroupingSettingsRoute,
  postAlertGroupingSettingsRoute,
  getAlertGroupingSettingsIdRoute,
  deleteAlertGroupingSettingsIdRoute,
  putAlertGroupingSettingsIdRoute,
} from '../routes'

export const getAlertGroupingSettingsRouteHandler: RouteHandler<
  typeof getAlertGroupingSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAlertGroupingSettingsRouteHandler: RouteHandler<
  typeof postAlertGroupingSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlertGroupingSettingsIdRouteHandler: RouteHandler<
  typeof getAlertGroupingSettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAlertGroupingSettingsIdRouteHandler: RouteHandler<
  typeof deleteAlertGroupingSettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAlertGroupingSettingsIdRouteHandler: RouteHandler<
  typeof putAlertGroupingSettingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
