import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBusinessServicesIdAccountSubscriptionRoute,
  deleteBusinessServicesIdRoute,
  deleteBusinessServicesPriorityThresholdsRoute,
  getBusinessServicesIdRoute,
  getBusinessServicesIdSubscribersRoute,
  getBusinessServicesIdSupportingServicesImpactsRoute,
  getBusinessServicesImpactorsRoute,
  getBusinessServicesImpactsRoute,
  getBusinessServicesPriorityThresholdsRoute,
  getBusinessServicesRoute,
  postBusinessServicesIdAccountSubscriptionRoute,
  postBusinessServicesIdSubscribersRoute,
  postBusinessServicesIdUnsubscribeRoute,
  postBusinessServicesRoute,
  putBusinessServicesIdRoute,
  putBusinessServicesPriorityThresholdsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessServicesHandler = app
  .openapi(getBusinessServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBusinessServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessServicesIdAccountSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessServicesIdAccountSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessServicesIdSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessServicesIdSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessServicesIdSupportingServicesImpactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessServicesIdUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessServicesImpactorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessServicesImpactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessServicesPriorityThresholdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessServicesPriorityThresholdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBusinessServicesPriorityThresholdsRoute, (c) => {
    throw new Error('Not implemented')
  })
