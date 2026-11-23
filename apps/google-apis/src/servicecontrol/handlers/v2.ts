import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postV2ServicesServiceNameCheckRoute,
  postV2ServicesServiceNameReportRoute,
} from '../routes'

export const postV2ServicesServiceNameCheckRouteHandler: RouteHandler<
  typeof postV2ServicesServiceNameCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ServicesServiceNameReportRouteHandler: RouteHandler<
  typeof postV2ServicesServiceNameReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
