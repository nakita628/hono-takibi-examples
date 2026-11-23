import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getManagedJobTemplatesRoute,
  getManagedJobTemplatesTemplateNameRoute,
} from '../routes'

export const getManagedJobTemplatesTemplateNameRouteHandler: RouteHandler<
  typeof getManagedJobTemplatesTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getManagedJobTemplatesRouteHandler: RouteHandler<
  typeof getManagedJobTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
