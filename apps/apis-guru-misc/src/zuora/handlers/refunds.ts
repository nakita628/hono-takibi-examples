import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectRefundIdRoute,
  deleteV1RefundsRefundIdRoute,
  getV1ObjectRefundIdRoute,
  getV1RefundsRefundIdPartsRefundpartidItempartsItempartidRoute,
  getV1RefundsRefundIdPartsRefundpartidItempartsRoute,
  getV1RefundsRefundIdPartsRefundpartidRoute,
  getV1RefundsRefundIdPartsRoute,
  getV1RefundsRefundIdRoute,
  getV1RefundsRoute,
  postV1ObjectRefundRoute,
  putV1ObjectRefundIdRoute,
  putV1RefundsRefundIdCancelRoute,
  putV1RefundsRefundIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const refundsHandler = app
  .openapi(postV1ObjectRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RefundsRefundIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRefundIdPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRefundIdPartsRefundpartidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRefundIdPartsRefundpartidItempartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RefundsRefundIdPartsRefundpartidItempartsItempartidRoute, (c) => {
    throw new Error('Not implemented')
  })
