import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCollectionsPaymentPromisesCollectionsPaymentPromiseIdRoute,
  getCollectionsPaymentPromisesRoute,
  postCollectionsPaymentPromisesCollectionsPaymentPromiseIdCancelRoute,
  postCollectionsPaymentPromisesCollectionsPaymentPromiseIdRoute,
  postCollectionsPaymentPromisesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsPaymentPromisesHandler = app
  .openapi(getCollectionsPaymentPromisesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsPaymentPromisesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsPaymentPromisesCollectionsPaymentPromiseIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsPaymentPromisesCollectionsPaymentPromiseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsPaymentPromisesCollectionsPaymentPromiseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
