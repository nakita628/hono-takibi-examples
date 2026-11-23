import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFileActionsMetadataPathRoute,
  postFileActionsBeginUploadPathRoute,
  postFileActionsCopyPathRoute,
  postFileActionsMovePathRoute,
} from '../routes'

export const postFileActionsBeginUploadPathRouteHandler: RouteHandler<
  typeof postFileActionsBeginUploadPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFileActionsCopyPathRouteHandler: RouteHandler<
  typeof postFileActionsCopyPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFileActionsMetadataPathRouteHandler: RouteHandler<
  typeof getFileActionsMetadataPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFileActionsMovePathRouteHandler: RouteHandler<
  typeof postFileActionsMovePathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
