import type { RouteHandler } from '@hono/zod-openapi'
import type {
  patchFindingsBatchupdateRoute,
  patchFindingsRoute,
  postFindingsImportRoute,
  postFindingsRoute,
} from '../routes'

export const postFindingsImportRouteHandler: RouteHandler<typeof postFindingsImportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchFindingsBatchupdateRouteHandler: RouteHandler<
  typeof patchFindingsBatchupdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFindingsRouteHandler: RouteHandler<typeof postFindingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchFindingsRouteHandler: RouteHandler<typeof patchFindingsRoute> = async (c) => {
  throw new Error('Not implemented')
}
