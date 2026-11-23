import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStringsLanguageCodePackageStatusRoute,
  getStringsRoute,
  postStringsLanguageCodePackageRoute,
  postStringsRoute,
  putStringsRoute,
} from '../routes'

export const getStringsRouteHandler: RouteHandler<typeof getStringsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postStringsRouteHandler: RouteHandler<typeof postStringsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putStringsRouteHandler: RouteHandler<typeof putStringsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postStringsLanguageCodePackageRouteHandler: RouteHandler<
  typeof postStringsLanguageCodePackageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStringsLanguageCodePackageStatusRouteHandler: RouteHandler<
  typeof getStringsLanguageCodePackageStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
