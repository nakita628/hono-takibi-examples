import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGithubLinkRoute,
  getGithubApplicationsRoute,
  getGithubCallbackRoute,
  getGithubEmailsRoute,
  getGithubKeysRoute,
  getGithubLinkRoute,
  getGithubLoginRoute,
  getGithubRoute,
  getGithubSignupRoute,
  getGithubUsernameRoute,
  postGithubRedeployRoute,
  postGithubSignupRoute,
} from '../routes'

export const getGithubRouteHandler: RouteHandler<typeof getGithubRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGithubApplicationsRouteHandler: RouteHandler<
  typeof getGithubApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGithubCallbackRouteHandler: RouteHandler<typeof getGithubCallbackRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGithubEmailsRouteHandler: RouteHandler<typeof getGithubEmailsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGithubKeysRouteHandler: RouteHandler<typeof getGithubKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGithubLinkRouteHandler: RouteHandler<typeof deleteGithubLinkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGithubLinkRouteHandler: RouteHandler<typeof getGithubLinkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGithubLoginRouteHandler: RouteHandler<typeof getGithubLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGithubRedeployRouteHandler: RouteHandler<typeof postGithubRedeployRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGithubSignupRouteHandler: RouteHandler<typeof getGithubSignupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGithubSignupRouteHandler: RouteHandler<typeof postGithubSignupRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGithubUsernameRouteHandler: RouteHandler<typeof getGithubUsernameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
