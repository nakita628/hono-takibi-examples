import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609TaxesGdprDeleteRoute,
  postCrmObjects202609TaxesMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609TaxesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TaxesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
