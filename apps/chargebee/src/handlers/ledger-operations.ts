import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLedgerOperationsLedgerOperationIdRoute,
  getLedgerOperationsRoute,
  postLedgerOperationsAllocateRoute,
  postLedgerOperationsAuthorizeRoute,
  postLedgerOperationsCaptureAuthorizationRoute,
  postLedgerOperationsCaptureRoute,
  postLedgerOperationsReleaseAuthorizationRoute,
} from '../routes'

export const postLedgerOperationsReleaseAuthorizationRouteHandler: RouteHandler<
  typeof postLedgerOperationsReleaseAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLedgerOperationsCaptureRouteHandler: RouteHandler<
  typeof postLedgerOperationsCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLedgerOperationsAllocateRouteHandler: RouteHandler<
  typeof postLedgerOperationsAllocateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLedgerOperationsAuthorizeRouteHandler: RouteHandler<
  typeof postLedgerOperationsAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLedgerOperationsRouteHandler: RouteHandler<
  typeof getLedgerOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLedgerOperationsCaptureAuthorizationRouteHandler: RouteHandler<
  typeof postLedgerOperationsCaptureAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLedgerOperationsLedgerOperationIdRouteHandler: RouteHandler<
  typeof getLedgerOperationsLedgerOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
