import { OpenAPIHono } from '@hono/zod-openapi'
import { getReferencesEntryIdRoute, getReferencesRoute } from '../routes'

const app = new OpenAPIHono()

export const referencesHandler = app
  .openapi(getReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReferencesEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
