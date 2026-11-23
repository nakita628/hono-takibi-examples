import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV3MailBatchBatchIdRoute,
  postV3MailBatchRoute,
  postV3MailSendRoute,
} from '../routes'

export const postV3MailBatchRouteHandler: RouteHandler<typeof postV3MailBatchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV3MailBatchBatchIdRouteHandler: RouteHandler<
  typeof getV3MailBatchBatchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV3MailSendRouteHandler: RouteHandler<typeof postV3MailSendRoute> = async (c) => {
  throw new Error('Not implemented')
}
