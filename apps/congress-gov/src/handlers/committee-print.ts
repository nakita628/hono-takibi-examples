import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCommitteePrintCongressChamberJacketNumberRoute,
  getCommitteePrintCongressChamberJacketNumberTextRoute,
  getCommitteePrintCongressChamberRoute,
  getCommitteePrintCongressRoute,
  getCommitteePrintRoute,
} from '../routes'

export const getCommitteePrintRouteHandler: RouteHandler<typeof getCommitteePrintRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCommitteePrintCongressRouteHandler: RouteHandler<
  typeof getCommitteePrintCongressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommitteePrintCongressChamberRouteHandler: RouteHandler<
  typeof getCommitteePrintCongressChamberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommitteePrintCongressChamberJacketNumberRouteHandler: RouteHandler<
  typeof getCommitteePrintCongressChamberJacketNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommitteePrintCongressChamberJacketNumberTextRouteHandler: RouteHandler<
  typeof getCommitteePrintCongressChamberJacketNumberTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}
