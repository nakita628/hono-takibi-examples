import { OpenAPIHono } from '@hono/zod-openapi'
import { postPrivateauctionPrivateAuctionIdUpdateproposalRoute } from '../routes'

const app = new OpenAPIHono()

export const privateauctionHandler = app.openapi(
  postPrivateauctionPrivateAuctionIdUpdateproposalRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
