import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdRoute,
  getProjectsProjectIdRoute,
  getProjectsProjectIdSettingsAnalysisConfigurationRoute,
  getProjectsProviderOrgNameRoute,
  getProjectsRoute,
  postProjectsRoute,
  putProjectsProjectIdSettingsAnalysisConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdSettingsAnalysisConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdSettingsAnalysisConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProviderOrgNameRoute, (c) => {
    throw new Error('Not implemented')
  })
