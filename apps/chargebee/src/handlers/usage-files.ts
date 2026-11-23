import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsageFilesUsageFileIdProcessingStatusRoute,
  postUsageFilesUploadUrlRoute,
} from '../routes'

export const getUsageFilesUsageFileIdProcessingStatusRouteHandler: RouteHandler<
  typeof getUsageFilesUsageFileIdProcessingStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsageFilesUploadUrlRouteHandler: RouteHandler<
  typeof postUsageFilesUploadUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}
