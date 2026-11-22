import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectIdAgentsAgentIdRoute,
  getV1ProjectsProjectIdAgentsAgentIdRoute,
  getV1ProjectsProjectIdAgentsRoute,
  postV1ProjectsProjectIdAgentsRoute,
  putV1ProjectsProjectIdAgentsAgentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationsHandler = app
  .openapi(postV1ProjectsProjectIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectIdAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectIdAgentsAgentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
