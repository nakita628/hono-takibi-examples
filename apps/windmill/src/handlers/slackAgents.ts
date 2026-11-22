import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceSlackAgentsAgentChannelsPathRoute,
  getWWorkspaceSlackAgentsAgentChannelsPathRoute,
  getWWorkspaceSlackAgentsAvailableChannelsRoute,
  getWWorkspaceSlackAgentsChannelsRoute,
  getWWorkspaceSlackAgentsStatusRoute,
  postWWorkspaceSlackAgentsAgentChannelsPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const slackAgentsHandler = app
  .openapi(getWWorkspaceSlackAgentsChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSlackAgentsAvailableChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSlackAgentsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceSlackAgentsAgentChannelsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceSlackAgentsAgentChannelsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceSlackAgentsAgentChannelsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
