import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdOrderreturnsReturnIdRoute,
  getMerchantIdOrderreturnsRoute,
  postMerchantIdOrderreturnsCreateOrderReturnRoute,
  postMerchantIdOrderreturnsReturnIdAcknowledgeRoute,
  postMerchantIdOrderreturnsReturnIdLabelsRoute,
  postMerchantIdOrderreturnsReturnIdProcessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderreturnsHandler = app
  .openapi(getMerchantIdOrderreturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrderreturnsCreateOrderReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrderreturnsReturnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrderreturnsReturnIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrderreturnsReturnIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrderreturnsReturnIdProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
