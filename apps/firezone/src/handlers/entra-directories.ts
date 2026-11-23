import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntraDirectoriesIdRoute, getEntraDirectoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const entraDirectoriesHandler = app
  .openapi(getEntraDirectoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntraDirectoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
