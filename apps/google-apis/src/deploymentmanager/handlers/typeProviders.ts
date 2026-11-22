import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesRoute,
  getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeRoute,
  patchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute,
  postDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersRoute,
  putDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const typeProvidersHandler = app
  .openapi(getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
