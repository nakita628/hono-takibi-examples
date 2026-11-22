import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute,
  getApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute,
  getApiV1AccountsAccountIdCustomAttributeDefinitionsRoute,
  patchApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute,
  postApiV1AccountsAccountIdCustomAttributeDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customAttributesHandler = app
  .openapi(getApiV1AccountsAccountIdCustomAttributeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdCustomAttributeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdCustomAttributeDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
