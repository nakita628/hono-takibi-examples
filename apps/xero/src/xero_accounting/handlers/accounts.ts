import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountsAccountIDRoute,
  getAccountsAccountIDAttachmentsAttachmentIDRoute,
  getAccountsAccountIDAttachmentsFileNameRoute,
  getAccountsAccountIDAttachmentsRoute,
  getAccountsAccountIDRoute,
  getAccountsRoute,
  postAccountsAccountIDAttachmentsFileNameRoute,
  postAccountsAccountIDRoute,
  putAccountsAccountIDAttachmentsFileNameRoute,
  putAccountsRoute,
} from '../routes'

export const getAccountsRouteHandler: RouteHandler<typeof getAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsRouteHandler: RouteHandler<typeof putAccountsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountIDRouteHandler: RouteHandler<
  typeof getAccountsAccountIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAccountIDRouteHandler: RouteHandler<
  typeof postAccountsAccountIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountsAccountIDRouteHandler: RouteHandler<
  typeof deleteAccountsAccountIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountIDAttachmentsRouteHandler: RouteHandler<
  typeof getAccountsAccountIDAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountIDAttachmentsAttachmentIDRouteHandler: RouteHandler<
  typeof getAccountsAccountIDAttachmentsAttachmentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountsAccountIDAttachmentsFileNameRouteHandler: RouteHandler<
  typeof getAccountsAccountIDAttachmentsFileNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAccountsAccountIDAttachmentsFileNameRouteHandler: RouteHandler<
  typeof postAccountsAccountIDAttachmentsFileNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAccountsAccountIDAttachmentsFileNameRouteHandler: RouteHandler<
  typeof putAccountsAccountIDAttachmentsFileNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
