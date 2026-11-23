import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRequirementGroupsIdRoute,
  getRequirementGroupsIdRoute,
  getRequirementGroupsRoute,
  patchRequirementGroupsIdRoute,
  postRequirementGroupsIdSubmitForApprovalRoute,
  postRequirementGroupsRoute,
} from '../routes'

export const getRequirementGroupsRouteHandler: RouteHandler<
  typeof getRequirementGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRequirementGroupsRouteHandler: RouteHandler<
  typeof postRequirementGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRequirementGroupsIdRouteHandler: RouteHandler<
  typeof deleteRequirementGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRequirementGroupsIdRouteHandler: RouteHandler<
  typeof getRequirementGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRequirementGroupsIdRouteHandler: RouteHandler<
  typeof patchRequirementGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRequirementGroupsIdSubmitForApprovalRouteHandler: RouteHandler<
  typeof postRequirementGroupsIdSubmitForApprovalRoute
> = async (c) => {
  throw new Error('Not implemented')
}
