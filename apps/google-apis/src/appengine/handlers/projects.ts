import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRoute,
  getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdRoute,
  getV1betaProjectsProjectsIdLocationsLocationsIdOperationsRoute,
  getV1betaProjectsProjectsIdLocationsLocationsIdRoute,
  getV1betaProjectsProjectsIdLocationsRoute,
  postV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepairRoute,
  postV1betaProjectsProjectsIdLocationsLocationsIdApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1betaProjectsProjectsIdLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaProjectsProjectsIdLocationsLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaProjectsProjectsIdLocationsLocationsIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepairRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1betaProjectsProjectsIdLocationsLocationsIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
