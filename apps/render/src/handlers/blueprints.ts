import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBlueprintsBlueprintIdRoute,
  getBlueprintsBlueprintIdRoute,
  getBlueprintsBlueprintIdSyncsRoute,
  getBlueprintsRoute,
  patchBlueprintsBlueprintIdRoute,
  postBlueprintsValidateRoute,
} from '../routes'

export const getBlueprintsRouteHandler: RouteHandler<typeof getBlueprintsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlueprintsValidateRouteHandler: RouteHandler<
  typeof postBlueprintsValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlueprintsBlueprintIdRouteHandler: RouteHandler<
  typeof getBlueprintsBlueprintIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBlueprintsBlueprintIdRouteHandler: RouteHandler<
  typeof patchBlueprintsBlueprintIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBlueprintsBlueprintIdRouteHandler: RouteHandler<
  typeof deleteBlueprintsBlueprintIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlueprintsBlueprintIdSyncsRouteHandler: RouteHandler<
  typeof getBlueprintsBlueprintIdSyncsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
