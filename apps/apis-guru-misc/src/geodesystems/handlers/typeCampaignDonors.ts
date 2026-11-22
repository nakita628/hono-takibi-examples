import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeCampaignDonorsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeCampaignDonorsHandler = app.openapi(
  getRepositorySearchTypeCampaignDonorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
