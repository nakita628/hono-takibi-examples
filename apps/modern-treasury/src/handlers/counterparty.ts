import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCounterpartiesIdRoute,
  getApiCounterpartiesIdRoute,
  getApiCounterpartiesRoute,
  patchApiCounterpartiesIdRoute,
  postApiCounterpartiesIdCollectAccountRoute,
  postApiCounterpartiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const counterpartyHandler = app
  .openapi(getApiCounterpartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCounterpartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCounterpartiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCounterpartiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCounterpartiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCounterpartiesIdCollectAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
