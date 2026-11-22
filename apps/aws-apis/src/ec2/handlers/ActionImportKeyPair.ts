import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionImportKeyPairRoute, postActionImportKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionImportKeyPairHandler = app
  .openapi(getActionImportKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionImportKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
