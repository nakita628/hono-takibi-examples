import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdCustomFieldsCustomFieldIdRoute,
  getV21AccountsAccountIdCustomFieldsRoute,
  postV21AccountsAccountIdCustomFieldsRoute,
  putV21AccountsAccountIdCustomFieldsCustomFieldIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountCustomFieldsHandler = app
  .openapi(getV21AccountsAccountIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdCustomFieldsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdCustomFieldsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
