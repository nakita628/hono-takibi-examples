import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2GiftCardsActivitiesRoute, postV2GiftCardsActivitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const giftCardActivitiesHandler = app
  .openapi(getV2GiftCardsActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2GiftCardsActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
