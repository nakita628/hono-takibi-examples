import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpTeamsResourcesProviderIdResourceIdRoute,
  getOcsV2PhpTeamsTeamIdResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsApiHandler = app
  .openapi(getOcsV2PhpTeamsTeamIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpTeamsResourcesProviderIdResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
