import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAnythingAllOfObjectRoute,
  postAnythingAnyOfObjectRoute,
  postAnythingAnyOfPrimitiveRoute,
  postAnythingNestedOneOfObjectRefRoute,
  postAnythingNestedOneOfObjectWithNestedOneOfRoute,
  postAnythingNestedOneOfRefRoute,
  postAnythingOneOfObjectRefRoute,
  postAnythingOneOfObjectRoute,
  postAnythingOneOfPrimitiveRoute,
} from '../routes'

export const postAnythingAllOfObjectRouteHandler: RouteHandler<
  typeof postAnythingAllOfObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingAnyOfObjectRouteHandler: RouteHandler<
  typeof postAnythingAnyOfObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingAnyOfPrimitiveRouteHandler: RouteHandler<
  typeof postAnythingAnyOfPrimitiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingOneOfObjectRouteHandler: RouteHandler<
  typeof postAnythingOneOfObjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingOneOfPrimitiveRouteHandler: RouteHandler<
  typeof postAnythingOneOfPrimitiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingOneOfObjectRefRouteHandler: RouteHandler<
  typeof postAnythingOneOfObjectRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingNestedOneOfObjectRefRouteHandler: RouteHandler<
  typeof postAnythingNestedOneOfObjectRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingNestedOneOfRefRouteHandler: RouteHandler<
  typeof postAnythingNestedOneOfRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingNestedOneOfObjectWithNestedOneOfRouteHandler: RouteHandler<
  typeof postAnythingNestedOneOfObjectWithNestedOneOfRoute
> = async (c) => {
  throw new Error('Not implemented')
}
