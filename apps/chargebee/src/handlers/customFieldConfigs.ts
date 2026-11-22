import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomFieldConfigsRetrieveRoute, getCustomFieldConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const customFieldConfigsHandler = app
  .openapi(getCustomFieldConfigsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomFieldConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
