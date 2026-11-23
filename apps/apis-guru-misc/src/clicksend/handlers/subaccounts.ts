import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSubaccountsSubaccountIdRoute,
  getSubaccountsRoute,
  getSubaccountsSubaccountIdRoute,
  postSubaccountsRoute,
  putSubaccountsSubaccountIdRegenApiKeyRoute,
  putSubaccountsSubaccountIdRoute,
} from '../routes'

export const getSubaccountsRouteHandler: RouteHandler<typeof getSubaccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubaccountsRouteHandler: RouteHandler<typeof postSubaccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSubaccountsSubaccountIdRouteHandler: RouteHandler<
  typeof deleteSubaccountsSubaccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubaccountsSubaccountIdRouteHandler: RouteHandler<
  typeof getSubaccountsSubaccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSubaccountsSubaccountIdRouteHandler: RouteHandler<
  typeof putSubaccountsSubaccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSubaccountsSubaccountIdRegenApiKeyRouteHandler: RouteHandler<
  typeof putSubaccountsSubaccountIdRegenApiKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
