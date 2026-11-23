import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiKeyBalanceTransfersRoute,
  getApiKeyCreditTransfersRoute,
  getApiKeySubaccountsRoute,
  getApiKeySubaccountsSubaccountKeyRoute,
  patchApiKeySubaccountsSubaccountKeyRoute,
  postApiKeyBalanceTransfersRoute,
  postApiKeyCreditTransfersRoute,
  postApiKeySubaccountsRoute,
  postApiKeyTransferNumberRoute,
} from '../routes'

export const getApiKeyBalanceTransfersRouteHandler: RouteHandler<
  typeof getApiKeyBalanceTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeyBalanceTransfersRouteHandler: RouteHandler<
  typeof postApiKeyBalanceTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeyCreditTransfersRouteHandler: RouteHandler<
  typeof getApiKeyCreditTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeyCreditTransfersRouteHandler: RouteHandler<
  typeof postApiKeyCreditTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeySubaccountsRouteHandler: RouteHandler<
  typeof getApiKeySubaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeySubaccountsRouteHandler: RouteHandler<
  typeof postApiKeySubaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiKeySubaccountsSubaccountKeyRouteHandler: RouteHandler<
  typeof getApiKeySubaccountsSubaccountKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiKeySubaccountsSubaccountKeyRouteHandler: RouteHandler<
  typeof patchApiKeySubaccountsSubaccountKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeyTransferNumberRouteHandler: RouteHandler<
  typeof postApiKeyTransferNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
