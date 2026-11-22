import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1BlockchainRecipientsBlockchainRecipientTokenRoute,
  postV1BlockchainRecipientsRoute,
} from '../routes'

export const postV1BlockchainRecipientsRouteHandler: RouteHandler<
  typeof postV1BlockchainRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BlockchainRecipientsBlockchainRecipientTokenRouteHandler: RouteHandler<
  typeof getV1BlockchainRecipientsBlockchainRecipientTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
