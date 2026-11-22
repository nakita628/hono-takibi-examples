import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamAccessLogsRoute,
  getTeamBillableInfoRoute,
  getTeamInfoRoute,
  getTeamIntegrationLogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamHandler = app
  .openapi(getTeamAccessLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamBillableInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamIntegrationLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
