import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCaseExportCallbacksCaseExportCallbackIdRoute,
  getCaseExportCallbacksRoute,
  getCaseExportCaseIdRoute,
} from '../routes'

export const getCaseExportCallbacksRouteHandler: RouteHandler<
  typeof getCaseExportCallbacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCaseExportCallbacksCaseExportCallbackIdRouteHandler: RouteHandler<
  typeof getCaseExportCallbacksCaseExportCallbackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCaseExportCaseIdRouteHandler: RouteHandler<
  typeof getCaseExportCaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
