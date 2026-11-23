import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePresetsIdRoute,
  deletePresetsRoute,
  getPresetsIdRoute,
  getPresetsRoute,
  patchPresetsIdRoute,
  patchPresetsRoute,
  postPresetsRoute,
} from '../routes'

export const getPresetsRouteHandler: RouteHandler<typeof getPresetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPresetsRouteHandler: RouteHandler<typeof postPresetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPresetsRouteHandler: RouteHandler<typeof patchPresetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePresetsRouteHandler: RouteHandler<typeof deletePresetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPresetsIdRouteHandler: RouteHandler<typeof getPresetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPresetsIdRouteHandler: RouteHandler<typeof patchPresetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePresetsIdRouteHandler: RouteHandler<typeof deletePresetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
