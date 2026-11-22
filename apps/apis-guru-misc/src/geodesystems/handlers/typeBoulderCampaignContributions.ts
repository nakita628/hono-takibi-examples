import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBoulderCampaignContributionsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBoulderCampaignContributionsHandler = app.openapi(
  getRepositorySearchTypeBoulderCampaignContributionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
