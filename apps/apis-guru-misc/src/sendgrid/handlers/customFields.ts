import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingFieldDefinitionsCustomFieldIdRoute,
  getMarketingFieldDefinitionsRoute,
  patchMarketingFieldDefinitionsCustomFieldIdRoute,
  postMarketingFieldDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFieldsHandler = app
  .openapi(getMarketingFieldDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingFieldDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingFieldDefinitionsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingFieldDefinitionsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
