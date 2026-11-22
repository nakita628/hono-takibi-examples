import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRevisionsDeleteRoute,
  postRevisionsExportRoute,
  postRevisionsInfoRoute,
  postRevisionsListRoute,
  postRevisionsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const revisionsHandler = app
  .openapi(postRevisionsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRevisionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRevisionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRevisionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRevisionsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
