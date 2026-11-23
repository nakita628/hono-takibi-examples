import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAssistantIdRoute,
  getAssistantIdRoute,
  getAssistantRoute,
  patchAssistantIdRoute,
  postAssistantRoute,
} from '../routes'

export const postAssistantRouteHandler: RouteHandler<typeof postAssistantRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssistantRouteHandler: RouteHandler<typeof getAssistantRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssistantIdRouteHandler: RouteHandler<typeof getAssistantIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAssistantIdRouteHandler: RouteHandler<typeof patchAssistantIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAssistantIdRouteHandler: RouteHandler<typeof deleteAssistantIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
