import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdTasksTaskIdRoute,
  deleteProjectsProjectIdTimeTimeEntryIdRoute,
  getProjectsProjectIdRoute,
  getProjectsProjectIdTasksRoute,
  getProjectsProjectIdTasksTaskIdRoute,
  getProjectsProjectIdTimeRoute,
  getProjectsProjectIdTimeTimeEntryIdRoute,
  getProjectsRoute,
  getProjectsUsersRoute,
  patchProjectsProjectIdRoute,
  postProjectsProjectIdTasksRoute,
  postProjectsProjectIdTimeRoute,
  postProjectsRoute,
  putProjectsProjectIdRoute,
  putProjectsProjectIdTasksTaskIdRoute,
  putProjectsProjectIdTimeTimeEntryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTimeTimeEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdTimeTimeEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdTimeTimeEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
