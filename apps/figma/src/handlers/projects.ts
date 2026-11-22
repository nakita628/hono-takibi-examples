import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectIdFilesRoute,
  getV1ProjectsProjectIdMetaRoute,
  getV1TeamsTeamIdProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1TeamsTeamIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
