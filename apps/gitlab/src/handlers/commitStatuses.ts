import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdRepositoryCommitsShaStatusesRoute,
  postApiV4ProjectsIdStatusesShaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commitStatusesHandler = app
  .openapi(getApiV4ProjectsIdRepositoryCommitsShaStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdStatusesShaRoute, (c) => {
    throw new Error('Not implemented')
  })
