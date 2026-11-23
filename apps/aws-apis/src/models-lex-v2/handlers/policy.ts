import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePolicyResourceArnIndexRoute,
  deletePolicyResourceArnStatementsStatementIdIndexRoute,
  getPolicyResourceArnIndexRoute,
  postPolicyResourceArnIndexRoute,
  postPolicyResourceArnStatementsIndexRoute,
  putPolicyResourceArnIndexRoute,
} from '../routes'

export const postPolicyResourceArnIndexRouteHandler: RouteHandler<
  typeof postPolicyResourceArnIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePolicyResourceArnIndexRouteHandler: RouteHandler<
  typeof deletePolicyResourceArnIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPolicyResourceArnIndexRouteHandler: RouteHandler<
  typeof getPolicyResourceArnIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPolicyResourceArnIndexRouteHandler: RouteHandler<
  typeof putPolicyResourceArnIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPolicyResourceArnStatementsIndexRouteHandler: RouteHandler<
  typeof postPolicyResourceArnStatementsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePolicyResourceArnStatementsStatementIdIndexRouteHandler: RouteHandler<
  typeof deletePolicyResourceArnStatementsStatementIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
