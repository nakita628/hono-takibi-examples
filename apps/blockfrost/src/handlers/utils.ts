import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUtilsAddressesXpubXpubRoleIndexRoute,
  postUtilsTxsEvaluateRoute,
  postUtilsTxsEvaluateUtxosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const utilsHandler = app
  .openapi(getUtilsAddressesXpubXpubRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUtilsTxsEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUtilsTxsEvaluateUtxosRoute, (c) => {
    throw new Error('Not implemented')
  })
