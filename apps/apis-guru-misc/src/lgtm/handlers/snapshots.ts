import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSnapshotsUploadsSessionIdRoute,
  getSnapshotsProjectIdLanguageRoute,
  postSnapshotsProjectIdLanguageRoute,
  postSnapshotsUploadsSessionIdRoute,
  putSnapshotsUploadsSessionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app
  .openapi(deleteSnapshotsUploadsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotsUploadsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSnapshotsUploadsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsProjectIdLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotsProjectIdLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
