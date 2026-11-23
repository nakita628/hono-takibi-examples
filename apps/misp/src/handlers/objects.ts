import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteObjectsDeleteObjectIdHardDeleteRoute,
  getObjectsViewObjectIdRoute,
  postObjectsAddEventIdObjectTemplateIdRoute,
  postObjectsRestsearchRoute,
} from '../routes'

export const postObjectsRestsearchRouteHandler: RouteHandler<
  typeof postObjectsRestsearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postObjectsAddEventIdObjectTemplateIdRouteHandler: RouteHandler<
  typeof postObjectsAddEventIdObjectTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getObjectsViewObjectIdRouteHandler: RouteHandler<
  typeof getObjectsViewObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteObjectsDeleteObjectIdHardDeleteRouteHandler: RouteHandler<
  typeof deleteObjectsDeleteObjectIdHardDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
