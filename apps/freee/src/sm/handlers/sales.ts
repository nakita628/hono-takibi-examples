import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSalesIdRoute,
  getSalesRoute,
  patchSalesIdRoute,
  postSalesIdCancellationRoute,
  postSalesRoute,
  putSalesIdCollectionStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const salesHandler = app
  .openapi(getSalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSalesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSalesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSalesIdCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSalesIdCollectionStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
