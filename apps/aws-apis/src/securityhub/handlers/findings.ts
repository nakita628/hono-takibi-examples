import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchFindingsBatchupdateRoute,
  patchFindingsRoute,
  postFindingsImportRoute,
  postFindingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const findingsHandler = app
  .openapi(postFindingsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFindingsBatchupdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
