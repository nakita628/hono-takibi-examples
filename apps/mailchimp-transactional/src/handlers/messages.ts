import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMessagesCancelScheduledRoute,
  postMessagesContentRoute,
  postMessagesInfoRoute,
  postMessagesListScheduledRoute,
  postMessagesParseRoute,
  postMessagesRescheduleRoute,
  postMessagesSearchRoute,
  postMessagesSearchTimeSeriesRoute,
  postMessagesSendMcTemplateRoute,
  postMessagesSendRawRoute,
  postMessagesSendRoute,
  postMessagesSendSmsRoute,
  postMessagesSendTemplateRoute,
} from '../routes'

export const postMessagesSendRouteHandler: RouteHandler<typeof postMessagesSendRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMessagesSendTemplateRouteHandler: RouteHandler<
  typeof postMessagesSendTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesSendMcTemplateRouteHandler: RouteHandler<
  typeof postMessagesSendMcTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesSearchRouteHandler: RouteHandler<typeof postMessagesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMessagesSearchTimeSeriesRouteHandler: RouteHandler<
  typeof postMessagesSearchTimeSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesInfoRouteHandler: RouteHandler<typeof postMessagesInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMessagesContentRouteHandler: RouteHandler<
  typeof postMessagesContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesParseRouteHandler: RouteHandler<typeof postMessagesParseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMessagesSendRawRouteHandler: RouteHandler<
  typeof postMessagesSendRawRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesListScheduledRouteHandler: RouteHandler<
  typeof postMessagesListScheduledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesCancelScheduledRouteHandler: RouteHandler<
  typeof postMessagesCancelScheduledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesRescheduleRouteHandler: RouteHandler<
  typeof postMessagesRescheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesSendSmsRouteHandler: RouteHandler<
  typeof postMessagesSendSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
