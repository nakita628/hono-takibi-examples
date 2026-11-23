import type { RouteHandler } from '@hono/zod-openapi'
import type {
  patchRequestBodyPrimitiveExampleRoute,
  postRequestBodyPrimitiveExampleRoute,
  putRequestBodyPrimitiveExampleRoute,
} from '../routes'

export const postRequestBodyPrimitiveExampleRouteHandler: RouteHandler<
  typeof postRequestBodyPrimitiveExampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRequestBodyPrimitiveExampleRouteHandler: RouteHandler<
  typeof patchRequestBodyPrimitiveExampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRequestBodyPrimitiveExampleRouteHandler: RouteHandler<
  typeof putRequestBodyPrimitiveExampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
