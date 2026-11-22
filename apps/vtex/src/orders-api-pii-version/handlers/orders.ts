import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOrdersPvtDocumentOrderIdRoute,
  postApiOrdersExtendsearchOrdersRoute,
  postApiOrdersPvtDocumentOrderIdActionsStartHandlingRoute,
  postApiOrdersPvtDocumentOrderIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(postApiOrdersExtendsearchOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersPvtDocumentOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersPvtDocumentOrderIdActionsStartHandlingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersPvtDocumentOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
