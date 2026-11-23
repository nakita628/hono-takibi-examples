import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMessageEventRoute,
  postMessageEventsyncRoute,
  postMessageRoute,
  postMessageSendbatchRoute,
  postMessageSendRoute,
  postMessageSyncackRoute,
  postMessageSyncRoute,
} from '../routes'

export const postMessageSendRouteHandler: RouteHandler<typeof postMessageSendRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessageSendbatchRouteHandler: RouteHandler<
  typeof postMessageSendbatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessageSyncRouteHandler: RouteHandler<typeof postMessageSyncRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessageSyncackRouteHandler: RouteHandler<typeof postMessageSyncackRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMessageRouteHandler: RouteHandler<typeof postMessageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessageEventRouteHandler: RouteHandler<typeof postMessageEventRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMessageEventsyncRouteHandler: RouteHandler<
  typeof postMessageEventsyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}
