import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSettingsApiRoute,
  getSettingsAttachmentRoute,
  getSettingsRepositoryRoute,
  getSettingsUiRoute,
} from '../routes'

export const getSettingsApiRouteHandler: RouteHandler<typeof getSettingsApiRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSettingsAttachmentRouteHandler: RouteHandler<
  typeof getSettingsAttachmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSettingsRepositoryRouteHandler: RouteHandler<
  typeof getSettingsRepositoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSettingsUiRouteHandler: RouteHandler<typeof getSettingsUiRoute> = async (c) => {
  throw new Error('Not implemented')
}
