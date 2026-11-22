import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountsAccountIdTemplatesTemplateIdRoute,
  getV1AccountsAccountIdTemplatesRoute,
  getV1AccountsAccountIdTemplatesTemplateIdRoute,
  postV1AccountsAccountIdTemplatesRoute,
  putV1AccountsAccountIdTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getV1AccountsAccountIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
