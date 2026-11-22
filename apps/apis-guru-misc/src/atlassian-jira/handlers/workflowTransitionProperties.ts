import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3WorkflowTransitionsTransitionIdPropertiesRoute,
  getRestApi3WorkflowTransitionsTransitionIdPropertiesRoute,
  postRestApi3WorkflowTransitionsTransitionIdPropertiesRoute,
  putRestApi3WorkflowTransitionsTransitionIdPropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowTransitionPropertiesHandler = app
  .openapi(deleteRestApi3WorkflowTransitionsTransitionIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WorkflowTransitionsTransitionIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WorkflowTransitionsTransitionIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowTransitionsTransitionIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
