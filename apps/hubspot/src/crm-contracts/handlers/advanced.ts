import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609ContractsGdprDeleteRoute,
  postCrmObjects202609ContractsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609ContractsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609ContractsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
