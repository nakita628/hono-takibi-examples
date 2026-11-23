import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConversationsModelsModelIdRoute,
  getConversationsModelsModelIdRoute,
  getConversationsModelsRoute,
  postConversationsModelsRoute,
  putConversationsModelsModelIdRoute,
} from '../routes'

export const getConversationsModelsRouteHandler: RouteHandler<
  typeof getConversationsModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConversationsModelsRouteHandler: RouteHandler<
  typeof postConversationsModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConversationsModelsModelIdRouteHandler: RouteHandler<
  typeof getConversationsModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putConversationsModelsModelIdRouteHandler: RouteHandler<
  typeof putConversationsModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConversationsModelsModelIdRouteHandler: RouteHandler<
  typeof deleteConversationsModelsModelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
