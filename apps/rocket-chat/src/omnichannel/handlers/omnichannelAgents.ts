import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatAgentInfoRidTokenRoute,
  getApiV1LivechatAgentNextTokenRoute,
  postApiV1LivechatAgentsSaveInfoRoute,
  postApiV1LivechatAgentStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelAgentsHandler = app
  .openapi(getApiV1LivechatAgentInfoRidTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatAgentNextTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatAgentsSaveInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatAgentStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
