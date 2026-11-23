import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute,
  deleteEnvironmentsEnvironmentUuidRoute,
  getEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute,
  getEnvironmentsEnvironmentUuidApiKeysRoute,
  getEnvironmentsEnvironmentUuidRoute,
  getEnvironmentsRoute,
  patchEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute,
  patchEnvironmentsEnvironmentUuidRoute,
  postEnvironmentsEnvironmentUuidApiKeysRoute,
  postEnvironmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentsEnvironmentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnvironmentsEnvironmentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvironmentsEnvironmentUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentsEnvironmentUuidApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnvironmentsEnvironmentUuidApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvironmentsEnvironmentUuidApiKeysKeyUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
