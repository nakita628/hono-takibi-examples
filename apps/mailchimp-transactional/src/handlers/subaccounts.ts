import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postSubaccountsAddRoute,
  postSubaccountsDeleteRoute,
  postSubaccountsInfoRoute,
  postSubaccountsListRoute,
  postSubaccountsPauseRoute,
  postSubaccountsResumeRoute,
  postSubaccountsUpdateRoute,
} from '../routes'

export const postSubaccountsListRouteHandler: RouteHandler<
  typeof postSubaccountsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubaccountsAddRouteHandler: RouteHandler<typeof postSubaccountsAddRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSubaccountsInfoRouteHandler: RouteHandler<
  typeof postSubaccountsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubaccountsUpdateRouteHandler: RouteHandler<
  typeof postSubaccountsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubaccountsDeleteRouteHandler: RouteHandler<
  typeof postSubaccountsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubaccountsPauseRouteHandler: RouteHandler<
  typeof postSubaccountsPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubaccountsResumeRouteHandler: RouteHandler<
  typeof postSubaccountsResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
