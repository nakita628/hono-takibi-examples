import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1GenevaActionsVnetPoolDefinitionsRoute,
  postApiV1GenevaActionsVnetPoolDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vnetPoolDefinitionsHandler = app
  .openapi(deleteApiV1GenevaActionsVnetPoolDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsVnetPoolDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
