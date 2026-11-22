import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2SatisfactionRatingsCountRoute,
  getApiV2SatisfactionRatingsRoute,
  getApiV2SatisfactionRatingsSatisfactionRatingIdRoute,
  postApiV2TicketsTicketIdSatisfactionRatingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const satisfactionRatingsHandler = app
  .openapi(getApiV2SatisfactionRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SatisfactionRatingsSatisfactionRatingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SatisfactionRatingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketsTicketIdSatisfactionRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
