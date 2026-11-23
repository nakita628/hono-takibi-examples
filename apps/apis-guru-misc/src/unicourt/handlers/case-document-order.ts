import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdRoute,
  getCaseDocumentOrderCallbacksRoute,
  putCaseDocumentOrderRoute,
} from '../routes'

export const putCaseDocumentOrderRouteHandler: RouteHandler<
  typeof putCaseDocumentOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCaseDocumentOrderCallbacksRouteHandler: RouteHandler<
  typeof getCaseDocumentOrderCallbacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdRouteHandler: RouteHandler<
  typeof getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
