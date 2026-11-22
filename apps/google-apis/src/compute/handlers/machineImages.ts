import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalMachineImagesMachineImageRoute,
  getProjectsProjectGlobalMachineImagesMachineImageRoute,
  getProjectsProjectGlobalMachineImagesResourceGetIamPolicyRoute,
  getProjectsProjectGlobalMachineImagesRoute,
  postProjectsProjectGlobalMachineImagesResourceSetIamPolicyRoute,
  postProjectsProjectGlobalMachineImagesResourceTestIamPermissionsRoute,
  postProjectsProjectGlobalMachineImagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const machineImagesHandler = app
  .openapi(getProjectsProjectGlobalMachineImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalMachineImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalMachineImagesMachineImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalMachineImagesMachineImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalMachineImagesResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalMachineImagesResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalMachineImagesResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
