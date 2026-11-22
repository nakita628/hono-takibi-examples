import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ConnectorRolloutFinalizeRoute,
  postV1ConnectorRolloutGetActorSyncInfoRoute,
  postV1ConnectorRolloutGetRoute,
  postV1ConnectorRolloutListAllRoute,
  postV1ConnectorRolloutListByActorDefinitionIdRoute,
  postV1ConnectorRolloutListRoute,
  postV1ConnectorRolloutManualFinalizeRoute,
  postV1ConnectorRolloutManualPauseRoute,
  postV1ConnectorRolloutManualRolloutRoute,
  postV1ConnectorRolloutManualStartRoute,
  postV1ConnectorRolloutRolloutRoute,
  postV1ConnectorRolloutStartRoute,
  postV1ConnectorRolloutUpdateStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectorRolloutHandler = app
  .openapi(postV1ConnectorRolloutListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutListByActorDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutListAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutGetActorSyncInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutRolloutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutUpdateStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutManualStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutManualRolloutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutManualFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectorRolloutManualPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
