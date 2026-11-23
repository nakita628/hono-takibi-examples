import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAssistantsAssistantIdRoute,
  getAssistantsAssistantIdRoute,
  getAssistantsRoute,
  postAssistantsAssistantIdRoute,
  postAssistantsRoute,
} from '../routes'

export const getAssistantsRouteHandler: RouteHandler<typeof getAssistantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAssistantsRouteHandler: RouteHandler<typeof postAssistantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssistantsAssistantIdRouteHandler: RouteHandler<
  typeof getAssistantsAssistantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAssistantsAssistantIdRouteHandler: RouteHandler<
  typeof postAssistantsAssistantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAssistantsAssistantIdRouteHandler: RouteHandler<
  typeof deleteAssistantsAssistantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
