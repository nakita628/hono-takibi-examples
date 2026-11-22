import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ObjectTaxationItemIdRoute,
  deleteV1TaxationitemsIdRoute,
  getV1ObjectTaxationItemIdRoute,
  getV1TaxationitemsIdRoute,
  postV1ObjectTaxationItemRoute,
  putV1ObjectTaxationItemIdRoute,
  putV1TaxationitemsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxationItemsHandler = app
  .openapi(postV1ObjectTaxationItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ObjectTaxationItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectTaxationItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ObjectTaxationItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TaxationitemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxationitemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TaxationitemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
