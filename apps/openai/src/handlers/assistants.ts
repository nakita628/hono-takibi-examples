import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAssistantsRoute,
  postAssistantsRoute,
  getAssistantsAssistantIdRoute,
  postAssistantsAssistantIdRoute,
  deleteAssistantsAssistantIdRoute,
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
