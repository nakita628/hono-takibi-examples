import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSystemArchivesArchiveKindRoute,
  getSystemArchivesArchiveKindZipCommitIdRoute,
  getSystemHealthcheckRoute,
  getSystemInfoRoute,
  getSystemStatusRoute,
  postSystemArchivesArchiveKindRestoreArchiveRestoreKindRoute,
  postSystemArchivesArchiveKindRoute,
  postSystemMaintenancePurgeSoftwareRoute,
  postSystemRegeneratePoliciesRoute,
  postSystemReloadGroupsRoute,
  postSystemReloadRoute,
  postSystemReloadTechniquesRoute,
  postSystemUpdatePoliciesRoute,
} from '../routes'

export const getSystemArchivesArchiveKindRouteHandler: RouteHandler<
  typeof getSystemArchivesArchiveKindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemArchivesArchiveKindRouteHandler: RouteHandler<
  typeof postSystemArchivesArchiveKindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemArchivesArchiveKindRestoreArchiveRestoreKindRouteHandler: RouteHandler<
  typeof postSystemArchivesArchiveKindRestoreArchiveRestoreKindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemArchivesArchiveKindZipCommitIdRouteHandler: RouteHandler<
  typeof getSystemArchivesArchiveKindZipCommitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemHealthcheckRouteHandler: RouteHandler<
  typeof getSystemHealthcheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemInfoRouteHandler: RouteHandler<typeof getSystemInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemMaintenancePurgeSoftwareRouteHandler: RouteHandler<
  typeof postSystemMaintenancePurgeSoftwareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemRegeneratePoliciesRouteHandler: RouteHandler<
  typeof postSystemRegeneratePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemReloadRouteHandler: RouteHandler<typeof postSystemReloadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSystemReloadGroupsRouteHandler: RouteHandler<
  typeof postSystemReloadGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemReloadTechniquesRouteHandler: RouteHandler<
  typeof postSystemReloadTechniquesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemStatusRouteHandler: RouteHandler<typeof getSystemStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSystemUpdatePoliciesRouteHandler: RouteHandler<
  typeof postSystemUpdatePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
