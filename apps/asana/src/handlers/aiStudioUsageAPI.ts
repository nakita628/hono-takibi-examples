import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWorkspacesWorkspaceGidAiStudioRunsRoute,
  getWorkspacesWorkspaceGidAiStudioSeatsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiStudioUsageAPIHandler = app
  .openapi(getWorkspacesWorkspaceGidAiStudioRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidAiStudioSeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
