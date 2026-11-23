import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteImagesFilenameRoute,
  getImagesFilenameRoute,
  putImagesFilenameRoute,
} from '../routes'

export const getImagesFilenameRouteHandler: RouteHandler<typeof getImagesFilenameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putImagesFilenameRouteHandler: RouteHandler<typeof putImagesFilenameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteImagesFilenameRouteHandler: RouteHandler<
  typeof deleteImagesFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
