import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAlarmsAlarmModelNameKeyValuesIndexRoute,
  getAlarmsAlarmModelNameRoute,
  postAlarmsAcknowledgeRoute,
  postAlarmsDisableRoute,
  postAlarmsEnableRoute,
  postAlarmsResetRoute,
  postAlarmsSnoozeRoute,
} from '../routes'

export const postAlarmsAcknowledgeRouteHandler: RouteHandler<
  typeof postAlarmsAcknowledgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAlarmsDisableRouteHandler: RouteHandler<typeof postAlarmsDisableRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAlarmsEnableRouteHandler: RouteHandler<typeof postAlarmsEnableRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAlarmsResetRouteHandler: RouteHandler<typeof postAlarmsResetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAlarmsSnoozeRouteHandler: RouteHandler<typeof postAlarmsSnoozeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAlarmsAlarmModelNameKeyValuesIndexRouteHandler: RouteHandler<
  typeof getAlarmsAlarmModelNameKeyValuesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlarmsAlarmModelNameRouteHandler: RouteHandler<
  typeof getAlarmsAlarmModelNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
