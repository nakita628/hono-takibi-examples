import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  deleteV1ParentProductsNameRoute,
  getV1NameRoute,
  getV1ParentProductCertificationsRoute,
  getV1ParentProductsNameRoute,
  getV1ParentProductsRoute,
  patchV1NameRoute,
  putV1ParentProductsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentProductCertificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ParentProductsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentProductsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ParentProductsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
