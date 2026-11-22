import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdRunnersRunnerIdRoute,
  deleteApiV4RunnersIdRoute,
  getApiV4GroupsIdRunnersRoute,
  getApiV4ProjectsIdRunnersRoute,
  getApiV4RunnersAllRoute,
  getApiV4RunnersIdJobsRoute,
  getApiV4RunnersIdManagersRoute,
  getApiV4RunnersIdProjectsRoute,
  getApiV4RunnersIdRoute,
  getApiV4RunnersRoute,
  postApiV4GroupsIdRunnersResetRegistrationTokenRoute,
  postApiV4ProjectsIdRunnersResetRegistrationTokenRoute,
  postApiV4ProjectsIdRunnersRoute,
  postApiV4RunnersIdResetAuthenticationTokenRoute,
  postApiV4RunnersResetRegistrationTokenRoute,
  putApiV4RunnersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const runnersHandler = app
  .openapi(getApiV4RunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4RunnersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4RunnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4RunnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4RunnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4RunnersIdManagersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4RunnersIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4RunnersIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4RunnersIdResetAuthenticationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4RunnersResetRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRunnersResetRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdRunnersResetRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
