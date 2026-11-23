import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountingCategoriesAccountingCategoryIdRoute,
  getAccountingCategoriesAccountingCategoryIdRoute,
  getAccountingCategoriesRoute,
  patchAccountingCategoriesAccountingCategoryIdRoute,
  postAccountingCategoriesRoute,
} from '../routes'

export const postAccountingCategoriesRouteHandler: RouteHandler<
  typeof postAccountingCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountingCategoriesRouteHandler: RouteHandler<
  typeof getAccountingCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountingCategoriesAccountingCategoryIdRouteHandler: RouteHandler<
  typeof getAccountingCategoriesAccountingCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAccountingCategoriesAccountingCategoryIdRouteHandler: RouteHandler<
  typeof patchAccountingCategoriesAccountingCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountingCategoriesAccountingCategoryIdRouteHandler: RouteHandler<
  typeof deleteAccountingCategoriesAccountingCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
