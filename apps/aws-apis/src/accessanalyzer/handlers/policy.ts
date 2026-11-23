import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPolicyGenerationJobIdRoute,
  getPolicyGenerationRoute,
  postPolicyValidationRoute,
  putPolicyGenerationJobIdRoute,
  putPolicyGenerationRoute,
} from '../routes'

export const putPolicyGenerationJobIdRouteHandler: RouteHandler<
  typeof putPolicyGenerationJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPolicyGenerationJobIdRouteHandler: RouteHandler<
  typeof getPolicyGenerationJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPolicyGenerationRouteHandler: RouteHandler<
  typeof getPolicyGenerationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPolicyGenerationRouteHandler: RouteHandler<
  typeof putPolicyGenerationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPolicyValidationRouteHandler: RouteHandler<
  typeof postPolicyValidationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
