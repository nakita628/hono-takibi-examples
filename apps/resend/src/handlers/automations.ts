import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAutomationsRoute,
  getAutomationsRoute,
  getAutomationsAutomationIdRoute,
  patchAutomationsAutomationIdRoute,
  deleteAutomationsAutomationIdRoute,
  postAutomationsAutomationIdDuplicateRoute,
  postAutomationsAutomationIdStopRoute,
  getAutomationsAutomationIdRunsRoute,
  getAutomationsAutomationIdRunsRunIdRoute,
  postAutomationsAutomationIdRunsRunIdCancelRoute,
} from '../routes'

export const postAutomationsRouteHandler: RouteHandler<typeof postAutomationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAutomationsRouteHandler: RouteHandler<typeof getAutomationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAutomationsAutomationIdRouteHandler: RouteHandler<
  typeof getAutomationsAutomationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAutomationsAutomationIdRouteHandler: RouteHandler<
  typeof patchAutomationsAutomationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAutomationsAutomationIdRouteHandler: RouteHandler<
  typeof deleteAutomationsAutomationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAutomationsAutomationIdDuplicateRouteHandler: RouteHandler<
  typeof postAutomationsAutomationIdDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAutomationsAutomationIdStopRouteHandler: RouteHandler<
  typeof postAutomationsAutomationIdStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAutomationsAutomationIdRunsRouteHandler: RouteHandler<
  typeof getAutomationsAutomationIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAutomationsAutomationIdRunsRunIdRouteHandler: RouteHandler<
  typeof getAutomationsAutomationIdRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAutomationsAutomationIdRunsRunIdCancelRouteHandler: RouteHandler<
  typeof postAutomationsAutomationIdRunsRunIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
