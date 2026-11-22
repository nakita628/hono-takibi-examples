import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOfferingsOfferingIdUsersMarkerEmailMarksRoute,
  deleteOfferingsOfferingIdUsersUserEmailRoute,
  getOfferingsOfferingIdUsersMarkerEmailMarksRoute,
  getOfferingsOfferingIdUsersRoute,
  patchUsersUserEmailTransferRoute,
  postOfferingsOfferingIdUsersMarkerEmailMarksRoute,
  postOfferingsOfferingIdUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const offeringLearnersHandler = app
  .openapi(getOfferingsOfferingIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdUsersMarkerEmailMarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOfferingsOfferingIdUsersMarkerEmailMarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfferingsOfferingIdUsersMarkerEmailMarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOfferingsOfferingIdUsersUserEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserEmailTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
