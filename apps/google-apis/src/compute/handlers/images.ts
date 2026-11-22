import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalImagesImageRoute,
  getProjectsProjectGlobalImagesFamilyFamilyRoute,
  getProjectsProjectGlobalImagesImageRoute,
  getProjectsProjectGlobalImagesResourceGetIamPolicyRoute,
  getProjectsProjectGlobalImagesRoute,
  patchProjectsProjectGlobalImagesImageRoute,
  postProjectsProjectGlobalImagesImageDeprecateRoute,
  postProjectsProjectGlobalImagesResourceSetIamPolicyRoute,
  postProjectsProjectGlobalImagesResourceSetLabelsRoute,
  postProjectsProjectGlobalImagesResourceTestIamPermissionsRoute,
  postProjectsProjectGlobalImagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app
  .openapi(getProjectsProjectGlobalImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalImagesFamilyFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalImagesImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalImagesImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalImagesImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalImagesImageDeprecateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalImagesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalImagesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalImagesResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalImagesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
