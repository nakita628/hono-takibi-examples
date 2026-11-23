import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIncidentWorkflowsIdRoute,
  deleteIncidentWorkflowsTriggersIdRoute,
  deleteIncidentWorkflowsTriggersTriggerIdServicesServiceIdRoute,
  getIncidentWorkflowsActionsIdRoute,
  getIncidentWorkflowsActionsRoute,
  getIncidentWorkflowsIdRoute,
  getIncidentWorkflowsRoute,
  getIncidentWorkflowsTriggersIdRoute,
  getIncidentWorkflowsTriggersRoute,
  postIncidentWorkflowsIdInstancesRoute,
  postIncidentWorkflowsRoute,
  postIncidentWorkflowsTriggersIdServicesRoute,
  postIncidentWorkflowsTriggersRoute,
  putIncidentWorkflowsIdRoute,
  putIncidentWorkflowsTriggersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const incidentWorkflowsHandler = app
  .openapi(getIncidentWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIncidentWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentWorkflowsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentWorkflowsIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentWorkflowsActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentWorkflowsActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentWorkflowsTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentWorkflowsTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentWorkflowsTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentWorkflowsTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIncidentWorkflowsTriggersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentWorkflowsTriggersIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIncidentWorkflowsTriggersTriggerIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
