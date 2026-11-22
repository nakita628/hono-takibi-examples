import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalInstanceTemplatesInstanceTemplateRoute,
  getProjectsProjectAggregatedInstanceTemplatesRoute,
  getProjectsProjectGlobalInstanceTemplatesInstanceTemplateRoute,
  getProjectsProjectGlobalInstanceTemplatesResourceGetIamPolicyRoute,
  getProjectsProjectGlobalInstanceTemplatesRoute,
  postProjectsProjectGlobalInstanceTemplatesResourceSetIamPolicyRoute,
  postProjectsProjectGlobalInstanceTemplatesResourceTestIamPermissionsRoute,
  postProjectsProjectGlobalInstanceTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instanceTemplatesHandler = app
  .openapi(getProjectsProjectAggregatedInstanceTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalInstanceTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalInstanceTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalInstanceTemplatesInstanceTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalInstanceTemplatesInstanceTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalInstanceTemplatesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalInstanceTemplatesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalInstanceTemplatesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
