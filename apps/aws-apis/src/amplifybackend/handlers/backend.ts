import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBackendAppIdChallengeSessionIdRoute,
  getBackendAppIdJobBackendEnvironmentNameJobIdRoute,
  postBackendAppIdApiBackendEnvironmentNameDetailsRoute,
  postBackendAppIdApiBackendEnvironmentNameGenerateModelsRoute,
  postBackendAppIdApiBackendEnvironmentNameGetModelsRoute,
  postBackendAppIdApiBackendEnvironmentNameRemoveRoute,
  postBackendAppIdApiBackendEnvironmentNameRoute,
  postBackendAppIdApiRoute,
  postBackendAppIdAuthBackendEnvironmentNameDetailsRoute,
  postBackendAppIdAuthBackendEnvironmentNameImportRoute,
  postBackendAppIdAuthBackendEnvironmentNameRemoveRoute,
  postBackendAppIdAuthBackendEnvironmentNameRoute,
  postBackendAppIdAuthRoute,
  postBackendAppIdChallengeRoute,
  postBackendAppIdChallengeSessionIdRemoveRoute,
  postBackendAppIdConfigRemoveRoute,
  postBackendAppIdConfigRoute,
  postBackendAppIdConfigUpdateRoute,
  postBackendAppIdDetailsRoute,
  postBackendAppIdEnvironmentsBackendEnvironmentNameCloneRoute,
  postBackendAppIdEnvironmentsBackendEnvironmentNameRemoveRoute,
  postBackendAppIdJobBackendEnvironmentNameJobIdRoute,
  postBackendAppIdJobBackendEnvironmentNameRoute,
  postBackendAppIdRemoveRoute,
  postBackendAppIdStorageBackendEnvironmentNameDetailsRoute,
  postBackendAppIdStorageBackendEnvironmentNameImportRoute,
  postBackendAppIdStorageBackendEnvironmentNameRemoveRoute,
  postBackendAppIdStorageBackendEnvironmentNameRoute,
  postBackendAppIdStorageRoute,
  postBackendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backendHandler = app
  .openapi(postBackendAppIdEnvironmentsBackendEnvironmentNameCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdEnvironmentsBackendEnvironmentNameRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdApiBackendEnvironmentNameRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdAuthBackendEnvironmentNameRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdStorageBackendEnvironmentNameRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdChallengeSessionIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdApiBackendEnvironmentNameGenerateModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdApiBackendEnvironmentNameDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdApiBackendEnvironmentNameGetModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdAuthBackendEnvironmentNameDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackendAppIdJobBackendEnvironmentNameJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdJobBackendEnvironmentNameJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdStorageBackendEnvironmentNameDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackendAppIdChallengeSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdAuthBackendEnvironmentNameImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdStorageBackendEnvironmentNameImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdJobBackendEnvironmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdConfigRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdApiBackendEnvironmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdAuthBackendEnvironmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdConfigUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackendAppIdStorageBackendEnvironmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
