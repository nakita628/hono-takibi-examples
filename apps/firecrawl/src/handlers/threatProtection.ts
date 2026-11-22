import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamThreatProtectionRoute, putTeamThreatProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const threatProtectionHandler = app
  .openapi(getTeamThreatProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamThreatProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
