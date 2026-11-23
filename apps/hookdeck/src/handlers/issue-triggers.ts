import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIssueTriggersIdRoute,
  getIssueTriggersIdRoute,
  getIssueTriggersRoute,
  postIssueTriggersRoute,
  putIssueTriggersIdDisableRoute,
  putIssueTriggersIdEnableRoute,
  putIssueTriggersIdRoute,
  putIssueTriggersRoute,
} from '../routes'

export const getIssueTriggersRouteHandler: RouteHandler<typeof getIssueTriggersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIssueTriggersRouteHandler: RouteHandler<typeof postIssueTriggersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putIssueTriggersRouteHandler: RouteHandler<typeof putIssueTriggersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getIssueTriggersIdRouteHandler: RouteHandler<typeof getIssueTriggersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putIssueTriggersIdRouteHandler: RouteHandler<typeof putIssueTriggersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIssueTriggersIdRouteHandler: RouteHandler<
  typeof deleteIssueTriggersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIssueTriggersIdDisableRouteHandler: RouteHandler<
  typeof putIssueTriggersIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIssueTriggersIdEnableRouteHandler: RouteHandler<
  typeof putIssueTriggersIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
