import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ExperimentsExperimentNameAssignmentsRoute,
  deleteApiV4ExperimentsNameCacheRoute,
  getApiV4ExperimentsExperimentNameAssignmentsRoute,
  getApiV4ExperimentsRoute,
  postApiV4ExperimentsExperimentNameAssignmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const experimentsHandler = app
  .openapi(getApiV4ExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ExperimentsNameCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ExperimentsExperimentNameAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ExperimentsExperimentNameAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ExperimentsExperimentNameAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
