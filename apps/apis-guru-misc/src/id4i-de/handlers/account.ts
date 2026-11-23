import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAccountPasswordRoute,
  postAccountRegistrationRoute,
  postAccountVerificationRoute,
  putAccountPasswordRoute,
  putAccountRegistrationRoute,
} from '../routes'

export const postAccountPasswordRouteHandler: RouteHandler<
  typeof postAccountPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountPasswordRouteHandler: RouteHandler<typeof putAccountPasswordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAccountRegistrationRouteHandler: RouteHandler<
  typeof postAccountRegistrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountRegistrationRouteHandler: RouteHandler<
  typeof putAccountRegistrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountVerificationRouteHandler: RouteHandler<
  typeof postAccountVerificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
