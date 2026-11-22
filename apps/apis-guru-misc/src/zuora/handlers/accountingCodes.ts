import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountingCodesAcIdRoute,
  getV1AccountingCodesAcIdRoute,
  getV1AccountingCodesRoute,
  postV1AccountingCodesRoute,
  putV1AccountingCodesAcIdActivateRoute,
  putV1AccountingCodesAcIdDeactivateRoute,
  putV1AccountingCodesAcIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountingCodesHandler = app
  .openapi(getV1AccountingCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountingCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountingCodesAcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountingCodesAcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingCodesAcIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingCodesAcIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountingCodesAcIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
