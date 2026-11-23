import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2SandboxesRoute,
  getV2SandboxesSandboxIDLogsRoute,
  getV2TemplatesRoute,
  getV2TemplatesTemplateIDRoute,
  patchV2TemplatesTemplateIDRoute,
  postV2SandboxesRoute,
  postV2SandboxesSandboxIDConnectRoute,
  postV2TemplatesTemplateIDBuildsBuildIDRoute,
} from '../routes'

export const postV2SandboxesRouteHandler: RouteHandler<typeof postV2SandboxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SandboxesRouteHandler: RouteHandler<typeof getV2SandboxesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SandboxesSandboxIDLogsRouteHandler: RouteHandler<
  typeof getV2SandboxesSandboxIDLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2SandboxesSandboxIDConnectRouteHandler: RouteHandler<
  typeof postV2SandboxesSandboxIDConnectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TemplatesRouteHandler: RouteHandler<typeof getV2TemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2TemplatesTemplateIDBuildsBuildIDRouteHandler: RouteHandler<
  typeof postV2TemplatesTemplateIDBuildsBuildIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2TemplatesTemplateIDRouteHandler: RouteHandler<
  typeof getV2TemplatesTemplateIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2TemplatesTemplateIDRouteHandler: RouteHandler<
  typeof patchV2TemplatesTemplateIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
