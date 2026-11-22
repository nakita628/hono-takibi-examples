import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SuppliersIdRoute,
  getV1SuppliersIdRoute,
  getV1SuppliersItemIdAccountTransRoute,
  getV1SuppliersItemIdOpeningBalanceListRoute,
  getV1SuppliersItemIdOpeningBalanceRoute,
  getV1SuppliersRoute,
  postV1SuppliersRoute,
  putV1SuppliersBatchRoute,
  putV1SuppliersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const suppliersHandler = app
  .openapi(getV1SuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SuppliersBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SuppliersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SuppliersItemIdAccountTransRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SuppliersItemIdOpeningBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SuppliersItemIdOpeningBalanceListRoute, (c) => {
    throw new Error('Not implemented')
  })
