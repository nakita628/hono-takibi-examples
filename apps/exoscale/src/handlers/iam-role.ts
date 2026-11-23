import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIamRoleIdRoute,
  getIamRoleIdRoute,
  getIamRoleRoute,
  postIamRoleIdAssumeRoute,
  postIamRoleRoute,
  putIamRoleIdPolicyRoute,
  putIamRoleIdRoute,
} from '../routes'

export const postIamRoleIdAssumeRouteHandler: RouteHandler<
  typeof postIamRoleIdAssumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIamRoleIdRouteHandler: RouteHandler<typeof putIamRoleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIamRoleIdRouteHandler: RouteHandler<typeof getIamRoleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIamRoleIdRouteHandler: RouteHandler<typeof deleteIamRoleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putIamRoleIdPolicyRouteHandler: RouteHandler<typeof putIamRoleIdPolicyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getIamRoleRouteHandler: RouteHandler<typeof getIamRoleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIamRoleRouteHandler: RouteHandler<typeof postIamRoleRoute> = async (c) => {
  throw new Error('Not implemented')
}
