import { OpenAPIHono } from '@hono/zod-openapi'
import { getStructuresEntryIdRoute, getStructuresRoute } from '../routes'

const app = new OpenAPIHono()

export const structuresHandler = app
  .openapi(getStructuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStructuresEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
