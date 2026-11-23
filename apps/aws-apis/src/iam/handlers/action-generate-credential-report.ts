import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGenerateCredentialReportRoute,
  postActionGenerateCredentialReportRoute,
} from '../routes'

export const getActionGenerateCredentialReportRouteHandler: RouteHandler<
  typeof getActionGenerateCredentialReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGenerateCredentialReportRouteHandler: RouteHandler<
  typeof postActionGenerateCredentialReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
