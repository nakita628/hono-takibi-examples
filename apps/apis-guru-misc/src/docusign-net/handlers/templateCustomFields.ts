import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute,
  postV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute,
  putV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateCustomFieldsHandler = app
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
