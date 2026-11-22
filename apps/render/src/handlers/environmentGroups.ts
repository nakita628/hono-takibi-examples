import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute,
  deleteEnvGroupsEnvGroupIdRoute,
  deleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute,
  deleteEnvGroupsEnvGroupIdServicesServiceIdRoute,
  getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute,
  getEnvGroupsEnvGroupIdRoute,
  getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute,
  getEnvGroupsRoute,
  patchEnvGroupsEnvGroupIdRoute,
  postEnvGroupsEnvGroupIdServicesServiceIdRoute,
  postEnvGroupsRoute,
  putEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute,
  putEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentGroupsHandler = app
  .openapi(getEnvGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnvGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvGroupsEnvGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnvGroupsEnvGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvGroupsEnvGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnvGroupsEnvGroupIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvGroupsEnvGroupIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvGroupsEnvGroupIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvGroupsEnvGroupIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
