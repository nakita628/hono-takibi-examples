import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportAmazonSnsIdRoute,
  getApiTransportAmazonSnsIdRoute,
  getApiTransportAmazonSnsRoute,
  postApiTransportAmazonSnsRoute,
  putApiTransportAmazonSnsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportAmazonSnsHandler = app
  .openapi(getApiTransportAmazonSnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportAmazonSnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportAmazonSnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportAmazonSnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportAmazonSnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
