import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiConsensusSettingsIdRoute,
  getApiConsensusSettingsRoute,
  patchApiConsensusSettingsIdRoute,
  postApiConsensusMergesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consensusHandler = app
  .openapi(postApiConsensusMergesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConsensusSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConsensusSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiConsensusSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
