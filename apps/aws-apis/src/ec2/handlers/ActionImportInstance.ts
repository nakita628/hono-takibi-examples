import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionImportInstanceRoute, postActionImportInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionImportInstanceHandler = app
  .openapi(getActionImportInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionImportInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
