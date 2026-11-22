import { OpenAPIHono } from '@hono/zod-openapi'
import { postSettingsTeams202609TeamIdMembersBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app.openapi(postSettingsTeams202609TeamIdMembersBatchRoute, (c) => {
  throw new Error('Not implemented')
})
