import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindEligibleItemsRoute, postSendOfferToInterestedBuyersRoute } from '../routes'

const app = new OpenAPIHono()

export const offerHandler = app
  .openapi(getFindEligibleItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendOfferToInterestedBuyersRoute, (c) => {
    throw new Error('Not implemented')
  })
