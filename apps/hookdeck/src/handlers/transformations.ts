import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTransformationsIdRoute,
  getTransformationsIdExecutionsExecutionIdRoute,
  getTransformationsIdExecutionsRoute,
  getTransformationsIdRoute,
  getTransformationsRoute,
  postTransformationsRoute,
  putTransformationsIdRoute,
  putTransformationsRoute,
  putTransformationsRunRoute,
} from '../routes'

export const getTransformationsRouteHandler: RouteHandler<typeof getTransformationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTransformationsRouteHandler: RouteHandler<
  typeof postTransformationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTransformationsRouteHandler: RouteHandler<typeof putTransformationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTransformationsIdRouteHandler: RouteHandler<
  typeof getTransformationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTransformationsIdRouteHandler: RouteHandler<
  typeof deleteTransformationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTransformationsIdRouteHandler: RouteHandler<
  typeof putTransformationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTransformationsRunRouteHandler: RouteHandler<
  typeof putTransformationsRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransformationsIdExecutionsRouteHandler: RouteHandler<
  typeof getTransformationsIdExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransformationsIdExecutionsExecutionIdRouteHandler: RouteHandler<
  typeof getTransformationsIdExecutionsExecutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
