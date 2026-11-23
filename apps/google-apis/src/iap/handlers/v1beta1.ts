import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postV1beta1ResourceGetIamPolicyRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from '../routes'

export const postV1beta1ResourceGetIamPolicyRouteHandler: RouteHandler<
  typeof postV1beta1ResourceGetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ResourceSetIamPolicyRouteHandler: RouteHandler<
  typeof postV1beta1ResourceSetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ResourceTestIamPermissionsRouteHandler: RouteHandler<
  typeof postV1beta1ResourceTestIamPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
