import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3WorkflowschemeProjectRoute,
  putRestApi3WorkflowschemeProjectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowSchemeProjectAssociationsHandler = app
  .openapi(getRestApi3WorkflowschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WorkflowschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
