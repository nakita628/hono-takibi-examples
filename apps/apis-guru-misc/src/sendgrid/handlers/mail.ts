import type { RouteHandler } from '@hono/zod-openapi'
import type { getMailBatchBatchIdRoute, postMailBatchRoute, postMailSendRoute } from '../routes'

export const postMailBatchRouteHandler: RouteHandler<typeof postMailBatchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMailBatchBatchIdRouteHandler: RouteHandler<
  typeof getMailBatchBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMailSendRouteHandler: RouteHandler<typeof postMailSendRoute> = async (c) => {
  throw new Error('Not implemented')
}
