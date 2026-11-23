import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteArchivesArchiveIdRoute,
  getArchivesRoute,
  postArchivesRoute,
  putArchivesArchiveIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const archivesHandler = app
  .openapi(getArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteArchivesArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putArchivesArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
