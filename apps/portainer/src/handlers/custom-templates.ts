import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCustomTemplatesIdRoute,
  getCustomTemplatesIdFileRoute,
  getCustomTemplatesIdRoute,
  getCustomTemplatesRoute,
  postCustomTemplatesCreateFileRoute,
  postCustomTemplatesCreateRepositoryRoute,
  postCustomTemplatesCreateStringRoute,
  putCustomTemplatesIdGitFetchRoute,
  putCustomTemplatesIdRoute,
} from '../routes'

export const getCustomTemplatesRouteHandler: RouteHandler<typeof getCustomTemplatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCustomTemplatesIdRouteHandler: RouteHandler<
  typeof deleteCustomTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomTemplatesIdRouteHandler: RouteHandler<
  typeof getCustomTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCustomTemplatesIdRouteHandler: RouteHandler<
  typeof putCustomTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomTemplatesIdFileRouteHandler: RouteHandler<
  typeof getCustomTemplatesIdFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCustomTemplatesIdGitFetchRouteHandler: RouteHandler<
  typeof putCustomTemplatesIdGitFetchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomTemplatesCreateFileRouteHandler: RouteHandler<
  typeof postCustomTemplatesCreateFileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomTemplatesCreateRepositoryRouteHandler: RouteHandler<
  typeof postCustomTemplatesCreateRepositoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomTemplatesCreateStringRouteHandler: RouteHandler<
  typeof postCustomTemplatesCreateStringRoute
> = async (c) => {
  throw new Error('Not implemented')
}
