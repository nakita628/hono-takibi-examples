import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServiceOfferingsIdRoute,
  getServiceOfferingsIdServiceInstancesRoute,
  getServiceOfferingsIdServiceOfferingNodesRoute,
  getServiceOfferingsIdServicePlansRoute,
  getServiceOfferingsRoute,
  postServiceOfferingsIdAppliedInventoriesTagsRoute,
  postServiceOfferingsIdOrderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceOfferingHandler = app
  .openapi(getServiceOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceOfferingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServiceOfferingsIdAppliedInventoriesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServiceOfferingsIdOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceOfferingsIdServiceInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceOfferingsIdServiceOfferingNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceOfferingsIdServicePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
