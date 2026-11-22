import { OpenAPIHono } from '@hono/zod-openapi'
import {
  putOfferingsOfferingIdMetadataCategoryRoute,
  putOfferingsOfferingIdMetadataLevelRoute,
  putOfferingsOfferingIdMetadataTagsRoute,
  putOfferingsOfferingIdMetadataTopicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const offeringMetadataHandler = app
  .openapi(putOfferingsOfferingIdMetadataCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOfferingsOfferingIdMetadataLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOfferingsOfferingIdMetadataTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOfferingsOfferingIdMetadataTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
