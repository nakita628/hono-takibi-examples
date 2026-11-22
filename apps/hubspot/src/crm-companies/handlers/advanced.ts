import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609CompaniesGdprDeleteRoute,
  postCrmObjects202609CompaniesMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609CompaniesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CompaniesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
