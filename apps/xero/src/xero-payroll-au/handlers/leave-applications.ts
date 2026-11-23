import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLeaveApplicationsLeaveApplicationIDRoute,
  getLeaveApplicationsRoute,
  getLeaveApplicationsV2Route,
  postLeaveApplicationsLeaveApplicationIDApproveRoute,
  postLeaveApplicationsLeaveApplicationIDRejectRoute,
  postLeaveApplicationsLeaveApplicationIDRoute,
  postLeaveApplicationsRoute,
} from '../routes'

export const getLeaveApplicationsRouteHandler: RouteHandler<
  typeof getLeaveApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLeaveApplicationsRouteHandler: RouteHandler<
  typeof postLeaveApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaveApplicationsV2RouteHandler: RouteHandler<
  typeof getLeaveApplicationsV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaveApplicationsLeaveApplicationIDRouteHandler: RouteHandler<
  typeof getLeaveApplicationsLeaveApplicationIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLeaveApplicationsLeaveApplicationIDRouteHandler: RouteHandler<
  typeof postLeaveApplicationsLeaveApplicationIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLeaveApplicationsLeaveApplicationIDApproveRouteHandler: RouteHandler<
  typeof postLeaveApplicationsLeaveApplicationIDApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLeaveApplicationsLeaveApplicationIDRejectRouteHandler: RouteHandler<
  typeof postLeaveApplicationsLeaveApplicationIDRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}
