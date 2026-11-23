import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendOfferToInterestedBuyersRoute } from '../routes'

const app = new OpenAPIHono()

export const sendOfferToInterestedBuyersHandler = app.openapi(
  postSendOfferToInterestedBuyersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
