import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteModelsModelRoute, getModelsModelRoute, getModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app
  .openapi(getModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModelsModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModelsModelRoute, (c) => {
    throw new Error('Not implemented')
  })
