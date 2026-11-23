import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOperationCreateJobActionCreateJobRoute,
  postOperationCreateJobActionCreateJobRoute,
} from '../routes'

export const getOperationCreateJobActionCreateJobRouteHandler: RouteHandler<
  typeof getOperationCreateJobActionCreateJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOperationCreateJobActionCreateJobRouteHandler: RouteHandler<
  typeof postOperationCreateJobActionCreateJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
