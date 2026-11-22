import { OpenAPIHono } from '@hono/zod-openapi'
import { getHyperparameterRoute, postHyperparameterRoute } from '../routes'

const app = new OpenAPIHono()

export const hyperparameterManagementHandler = app
  .openapi(getHyperparameterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHyperparameterRoute, (c) => {
    throw new Error('Not implemented')
  })
