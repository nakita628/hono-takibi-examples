import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2ActionsRoute,
  getV2TasksRoute,
  getV2TasksTaskIdEventsRoute,
  getV2TasksTaskIdRoute,
  getV2TemplatesNamespaceKindNameParameterSchemaRoute,
  getV2TemplatingExtensionsRoute,
  postV2AutocompleteProviderResourceRoute,
  postV2DryRunRoute,
  postV2TasksRoute,
  postV2TasksTaskIdCancelRoute,
  postV2TasksTaskIdRetryRoute,
} from '../routes'

export const getV2TemplatesNamespaceKindNameParameterSchemaRouteHandler: RouteHandler<
  typeof getV2TemplatesNamespaceKindNameParameterSchemaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ActionsRouteHandler: RouteHandler<typeof getV2ActionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TasksRouteHandler: RouteHandler<typeof getV2TasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TasksRouteHandler: RouteHandler<typeof postV2TasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TasksTaskIdRouteHandler: RouteHandler<typeof getV2TasksTaskIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2TasksTaskIdCancelRouteHandler: RouteHandler<
  typeof postV2TasksTaskIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TasksTaskIdRetryRouteHandler: RouteHandler<
  typeof postV2TasksTaskIdRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TasksTaskIdEventsRouteHandler: RouteHandler<
  typeof getV2TasksTaskIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DryRunRouteHandler: RouteHandler<typeof postV2DryRunRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AutocompleteProviderResourceRouteHandler: RouteHandler<
  typeof postV2AutocompleteProviderResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TemplatingExtensionsRouteHandler: RouteHandler<
  typeof getV2TemplatingExtensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
