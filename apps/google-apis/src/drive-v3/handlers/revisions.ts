import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdRevisionsRevisionIdRoute,
  getFilesFileIdRevisionsRevisionIdRoute,
  getFilesFileIdRevisionsRoute,
  patchFilesFileIdRevisionsRevisionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const revisionsHandler = app
  .openapi(getFilesFileIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesFileIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
