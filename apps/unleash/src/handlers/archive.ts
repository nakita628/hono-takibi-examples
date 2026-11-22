import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminArchiveFeatureNameRoute,
  postApiAdminArchiveReviveFeatureNameRoute,
  postApiAdminProjectsProjectIdDeleteRoute,
  postApiAdminProjectsProjectIdReviveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const archiveHandler = app
  .openapi(deleteApiAdminArchiveFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminArchiveReviveFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdReviveRoute, (c) => {
    throw new Error('Not implemented')
  })
