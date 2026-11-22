import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOfferingsOfferingIdBadgesRoute,
  getUsersUserEmailBadgesRoute,
  postOfferingsOfferingIdUsersUserEmailBadgesAwardRoute,
} from '../routes'

const app = new OpenAPIHono()

export const badgesHandler = app
  .openapi(getOfferingsOfferingIdBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdUsersUserEmailBadgesAwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserEmailBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
