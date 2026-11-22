import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute,
  getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasRoute,
  getV1PrivateAgentConfigsBlueprintsBlueprintIdRoute,
  getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute,
  getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdRoute,
  getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdRoute,
  getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameRoute,
  patchV1PrivateAgentConfigsBlueprintsRoute,
  postV1PrivateAgentConfigsBlueprintsEnvironmentsRoute,
  postV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdRoute,
  postV1PrivateAgentConfigsBlueprintsRemoveKeysRoute,
  postV1PrivateAgentConfigsBlueprintsRoute,
  putV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentConfigsHandler = app
  .openapi(postV1PrivateAgentConfigsBlueprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateAgentConfigsBlueprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentConfigsBlueprintsEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateAgentConfigsBlueprintsRemoveKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
