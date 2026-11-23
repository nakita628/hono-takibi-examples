import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTestsIdEventsTestCaseIdRoute,
  getTestsIdMessagesTestCaseIdRoute,
  getTestsIdRoute,
  getTestsServiceServiceIdCountRoute,
  getTestsServiceServiceIdRoute,
  postTestsIdTestCaseResultRoute,
  postTestsRoute,
} from '../routes'

export const postTestsRouteHandler: RouteHandler<typeof postTestsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTestsServiceServiceIdRouteHandler: RouteHandler<
  typeof getTestsServiceServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTestsServiceServiceIdCountRouteHandler: RouteHandler<
  typeof getTestsServiceServiceIdCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTestsIdRouteHandler: RouteHandler<typeof getTestsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTestsIdEventsTestCaseIdRouteHandler: RouteHandler<
  typeof getTestsIdEventsTestCaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTestsIdMessagesTestCaseIdRouteHandler: RouteHandler<
  typeof getTestsIdMessagesTestCaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTestsIdTestCaseResultRouteHandler: RouteHandler<
  typeof postTestsIdTestCaseResultRoute
> = async (c) => {
  throw new Error('Not implemented')
}
