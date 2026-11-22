import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesRoute,
  patchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute,
  postDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesRoute,
  putDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const compositeTypesHandler = app
  .openapi(getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
