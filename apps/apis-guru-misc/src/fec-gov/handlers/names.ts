import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNamesAuditCandidatesIndexRoute,
  getNamesAuditCommitteesIndexRoute,
  getNamesCandidatesIndexRoute,
  getNamesCommitteesIndexRoute,
} from '../routes'

export const getNamesAuditCandidatesIndexRouteHandler: RouteHandler<
  typeof getNamesAuditCandidatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamesAuditCommitteesIndexRouteHandler: RouteHandler<
  typeof getNamesAuditCommitteesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamesCandidatesIndexRouteHandler: RouteHandler<
  typeof getNamesCandidatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamesCommitteesIndexRouteHandler: RouteHandler<
  typeof getNamesCommitteesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
