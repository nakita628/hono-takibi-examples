import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectGlobalSnapshotSettingsRoute,
  patchProjectsProjectGlobalSnapshotSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotSettingsHandler = app
  .openapi(getProjectsProjectGlobalSnapshotSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalSnapshotSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
