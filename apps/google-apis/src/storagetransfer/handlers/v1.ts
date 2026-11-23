import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1JobNameRoute,
  deleteV1NameRoute,
  getV1GoogleServiceAccountsProjectIdRoute,
  getV1JobNameRoute,
  getV1NameRoute,
  getV1ProjectsProjectIdAgentPoolsRoute,
  getV1TransferJobsRoute,
  patchV1JobNameRoute,
  patchV1NameRoute,
  postV1JobNameRunRoute,
  postV1NameCancelRoute,
  postV1NamePauseRoute,
  postV1NameResumeRoute,
  postV1ProjectsProjectIdAgentPoolsRoute,
  postV1TransferJobsRoute,
} from '../routes'

export const getV1GoogleServiceAccountsProjectIdRouteHandler: RouteHandler<
  typeof getV1GoogleServiceAccountsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProjectsProjectIdAgentPoolsRouteHandler: RouteHandler<
  typeof getV1ProjectsProjectIdAgentPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProjectsProjectIdAgentPoolsRouteHandler: RouteHandler<
  typeof postV1ProjectsProjectIdAgentPoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransferJobsRouteHandler: RouteHandler<typeof getV1TransferJobsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1TransferJobsRouteHandler: RouteHandler<typeof postV1TransferJobsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1JobNameRouteHandler: RouteHandler<typeof deleteV1JobNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1JobNameRouteHandler: RouteHandler<typeof getV1JobNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1JobNameRouteHandler: RouteHandler<typeof patchV1JobNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1JobNameRunRouteHandler: RouteHandler<typeof postV1JobNameRunRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameCancelRouteHandler: RouteHandler<typeof postV1NameCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NamePauseRouteHandler: RouteHandler<typeof postV1NamePauseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameResumeRouteHandler: RouteHandler<typeof postV1NameResumeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
