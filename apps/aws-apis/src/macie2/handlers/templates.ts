import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTemplatesSensitivityInspectionsIdRoute,
  getTemplatesSensitivityInspectionsRoute,
  putTemplatesSensitivityInspectionsIdRoute,
} from '../routes'

export const getTemplatesSensitivityInspectionsIdRouteHandler: RouteHandler<
  typeof getTemplatesSensitivityInspectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTemplatesSensitivityInspectionsIdRouteHandler: RouteHandler<
  typeof putTemplatesSensitivityInspectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTemplatesSensitivityInspectionsRouteHandler: RouteHandler<
  typeof getTemplatesSensitivityInspectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
