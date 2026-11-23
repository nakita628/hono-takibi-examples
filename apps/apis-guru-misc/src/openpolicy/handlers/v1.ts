import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1DataPathRoute,
  deleteV1PoliciesIdRoute,
  getV1ConfigRoute,
  getV1DataPathRoute,
  getV1PoliciesIdRoute,
  getV1PoliciesRoute,
  getV1QueryRoute,
  patchV1DataPathRoute,
  postV1CompileRoute,
  postV1DataPathRoute,
  postV1QueryRoute,
  putV1DataPathRoute,
  putV1PoliciesIdRoute,
} from '../routes'

export const postV1CompileRouteHandler: RouteHandler<typeof postV1CompileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigRouteHandler: RouteHandler<typeof getV1ConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1DataPathRouteHandler: RouteHandler<typeof deleteV1DataPathRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1DataPathRouteHandler: RouteHandler<typeof getV1DataPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1DataPathRouteHandler: RouteHandler<typeof patchV1DataPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1DataPathRouteHandler: RouteHandler<typeof postV1DataPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1DataPathRouteHandler: RouteHandler<typeof putV1DataPathRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1PoliciesRouteHandler: RouteHandler<typeof getV1PoliciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1PoliciesIdRouteHandler: RouteHandler<typeof deleteV1PoliciesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1PoliciesIdRouteHandler: RouteHandler<typeof getV1PoliciesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1PoliciesIdRouteHandler: RouteHandler<typeof putV1PoliciesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1QueryRouteHandler: RouteHandler<typeof getV1QueryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1QueryRouteHandler: RouteHandler<typeof postV1QueryRoute> = async (c) => {
  throw new Error('Not implemented')
}
