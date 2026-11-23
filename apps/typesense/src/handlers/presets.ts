import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePresetsPresetIdRoute,
  getPresetsPresetIdRoute,
  getPresetsRoute,
  putPresetsPresetIdRoute,
} from '../routes'

export const getPresetsRouteHandler: RouteHandler<typeof getPresetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPresetsPresetIdRouteHandler: RouteHandler<typeof getPresetsPresetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putPresetsPresetIdRouteHandler: RouteHandler<typeof putPresetsPresetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePresetsPresetIdRouteHandler: RouteHandler<
  typeof deletePresetsPresetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
