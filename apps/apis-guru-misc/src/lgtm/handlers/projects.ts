import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProjectsProjectIdRoute,
  getProjectsProjectIdRoute,
  getProjectsProjectIdSettingsAnalysisConfigurationRoute,
  getProjectsProviderOrgNameRoute,
  getProjectsRoute,
  postProjectsRoute,
  putProjectsProjectIdSettingsAnalysisConfigurationRoute,
} from '../routes'

export const getProjectsRouteHandler: RouteHandler<typeof getProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsRouteHandler: RouteHandler<typeof postProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsProjectIdRouteHandler: RouteHandler<
  typeof getProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsProjectIdSettingsAnalysisConfigurationRouteHandler: RouteHandler<
  typeof getProjectsProjectIdSettingsAnalysisConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsProjectIdSettingsAnalysisConfigurationRouteHandler: RouteHandler<
  typeof putProjectsProjectIdSettingsAnalysisConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsProviderOrgNameRouteHandler: RouteHandler<
  typeof getProjectsProviderOrgNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
