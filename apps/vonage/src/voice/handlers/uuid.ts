import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUuidStreamRoute,
  deleteUuidTalkRoute,
  getUuidRoute,
  putUuidDtmfRoute,
  putUuidRoute,
  putUuidStreamRoute,
  putUuidTalkRoute,
} from '../routes'

export const getUuidRouteHandler: RouteHandler<typeof getUuidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUuidRouteHandler: RouteHandler<typeof putUuidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUuidDtmfRouteHandler: RouteHandler<typeof putUuidDtmfRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUuidStreamRouteHandler: RouteHandler<typeof deleteUuidStreamRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putUuidStreamRouteHandler: RouteHandler<typeof putUuidStreamRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUuidTalkRouteHandler: RouteHandler<typeof deleteUuidTalkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUuidTalkRouteHandler: RouteHandler<typeof putUuidTalkRoute> = async (c) => {
  throw new Error('Not implemented')
}
