import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListSnapshotsInRecycleBinRoute,
  postActionListSnapshotsInRecycleBinRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListSnapshotsInRecycleBinHandler = app
  .openapi(getActionListSnapshotsInRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListSnapshotsInRecycleBinRoute, (c) => {
    throw new Error('Not implemented')
  })
