import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgentWorkersGetMinVersionRoute,
  getAgentWorkersListBlacklistedTokensRoute,
  postAgentWorkersBlacklistTokenRoute,
  postAgentWorkersCreateAgentTokenRoute,
  postAgentWorkersRemoveBlacklistTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentWorkersHandler = app
  .openapi(postAgentWorkersCreateAgentTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentWorkersBlacklistTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgentWorkersRemoveBlacklistTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentWorkersListBlacklistedTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgentWorkersGetMinVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
