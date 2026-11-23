import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDevicesIdRoute,
  getDevicesRoute,
  postDevicesRoute,
  putDevicesIdAccumulatorsRoute,
  putDevicesIdRoute,
} from '../routes'

export const getDevicesRouteHandler: RouteHandler<typeof getDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesRouteHandler: RouteHandler<typeof postDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDevicesIdRouteHandler: RouteHandler<typeof deleteDevicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesIdRouteHandler: RouteHandler<typeof putDevicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putDevicesIdAccumulatorsRouteHandler: RouteHandler<
  typeof putDevicesIdAccumulatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
