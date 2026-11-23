import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PaymentLinksLinkIdRoute,
  getV1PaymentLinksRoute,
  postV1PaymentLinksRoute,
  putV1PaymentLinksLinkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1PaymentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
