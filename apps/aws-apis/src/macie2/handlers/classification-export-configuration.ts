import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClassificationExportConfigurationRoute,
  putClassificationExportConfigurationRoute,
} from '../routes'

export const getClassificationExportConfigurationRouteHandler: RouteHandler<
  typeof getClassificationExportConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putClassificationExportConfigurationRouteHandler: RouteHandler<
  typeof putClassificationExportConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
