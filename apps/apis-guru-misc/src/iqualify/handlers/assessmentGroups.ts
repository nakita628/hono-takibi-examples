import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRoute,
  getOfferingsOfferingIdGroupsGroupIdLearnersRoute,
  getOfferingsOfferingIdGroupsRoute,
  postOfferingsOfferingIdGroupsGroupIdLearnersRoute,
  postOfferingsOfferingIdGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assessmentGroupsHandler = app
  .openapi(getOfferingsOfferingIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdGroupsGroupIdLearnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdGroupsGroupIdLearnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
