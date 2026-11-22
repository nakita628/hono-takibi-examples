import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceSchedulesDeletePathRoute,
  getWWorkspaceSchedulesExistsPathRoute,
  getWWorkspaceSchedulesGetPathRoute,
  getWWorkspaceSchedulesListRoute,
  getWWorkspaceSchedulesListWithJobsRoute,
  postSchedulesPreviewRoute,
  postWWorkspaceSchedulesCreateRoute,
  postWWorkspaceSchedulesSetdefaulthandlerRoute,
  postWWorkspaceSchedulesSetenabledPathRoute,
  postWWorkspaceSchedulesUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduleHandler = app
  .openapi(postSchedulesPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSchedulesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSchedulesUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSchedulesSetenabledPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceSchedulesDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSchedulesGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSchedulesExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSchedulesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSchedulesListWithJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSchedulesSetdefaulthandlerRoute, (c) => {
    throw new Error('Not implemented')
  })
