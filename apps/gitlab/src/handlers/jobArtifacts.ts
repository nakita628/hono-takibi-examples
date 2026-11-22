import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdArtifactsRoute,
  deleteApiV4ProjectsIdJobsJobIdArtifactsRoute,
  getApiV4ProjectsIdJobsArtifactsRefNameDownloadRoute,
  getApiV4ProjectsIdJobsArtifactsRefNameRawArtifactPathRoute,
  getApiV4ProjectsIdJobsJobIdArtifactsArtifactPathRoute,
  getApiV4ProjectsIdJobsJobIdArtifactsRoute,
  getApiV4ProjectsIdJobsJobIdArtifactsTreeRoute,
  postApiV4ProjectsIdJobsJobIdArtifactsKeepRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobArtifactsHandler = app
  .openapi(getApiV4ProjectsIdJobsArtifactsRefNameDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdJobsArtifactsRefNameRawArtifactPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdJobsJobIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdJobsJobIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdJobsJobIdArtifactsTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdJobsJobIdArtifactsArtifactPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdJobsJobIdArtifactsKeepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
