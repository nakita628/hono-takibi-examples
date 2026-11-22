import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdAssignedworkflowsRoute,
  getProvidersEmployersEmployerIdWorkflowsRoute,
  getProvidersEmployersWorkflowsWorkflowIdRoute,
  getUsersInitiatedworkflowsRoute,
  postProvidersEmployersWorkflowsWorkflowIdTransitionRoute,
  putProvidersEmployersWorkflowsWorkflowIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(getProvidersEmployersWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersWorkflowsWorkflowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersWorkflowsWorkflowIdTransitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdAssignedworkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdWorkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersInitiatedworkflowsRoute, (c) => {
    throw new Error('Not implemented')
  })
