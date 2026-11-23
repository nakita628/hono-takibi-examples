import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSubmissionsSubmissionIdRoute,
  getSubmissionsBatchesSubmissionBatchIdRoute,
  getSubmissionsRoute,
  getSubmissionsSubmissionIdRoute,
  postSubmissionsBatchesRoute,
} from '../routes'

export const getSubmissionsRouteHandler: RouteHandler<typeof getSubmissionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSubmissionsBatchesRouteHandler: RouteHandler<
  typeof postSubmissionsBatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubmissionsBatchesSubmissionBatchIdRouteHandler: RouteHandler<
  typeof getSubmissionsBatchesSubmissionBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSubmissionsSubmissionIdRouteHandler: RouteHandler<
  typeof deleteSubmissionsSubmissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSubmissionsSubmissionIdRouteHandler: RouteHandler<
  typeof getSubmissionsSubmissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
