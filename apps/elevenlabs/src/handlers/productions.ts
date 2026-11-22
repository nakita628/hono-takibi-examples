import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProductionsOrdersOrderIdItemsItemIdRoute,
  getV1ProductionsOrdersLanguagesOrderItemKindRoute,
  getV1ProductionsOrdersOrderIdDeliverablesRoute,
  getV1ProductionsOrdersOrderIdMediaMediaIdRoute,
  getV1ProductionsOrdersOrderIdRoute,
  getV1ProductionsOrdersRoute,
  patchV1ProductionsOrdersOrderIdRoute,
  postV1ProductionsOrdersOrderIdItemsRoute,
  postV1ProductionsOrdersOrderIdMediaRoute,
  postV1ProductionsOrdersOrderIdSubmitRoute,
  postV1ProductionsOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productionsHandler = app
  .openapi(postV1ProductionsOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductionsOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductionsOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProductionsOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductionsOrdersOrderIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductionsOrdersOrderIdMediaMediaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductionsOrdersOrderIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductionsOrdersOrderIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductionsOrdersOrderIdSubmitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductionsOrdersOrderIdDeliverablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductionsOrdersLanguagesOrderItemKindRoute, (c) => {
    throw new Error('Not implemented')
  })
