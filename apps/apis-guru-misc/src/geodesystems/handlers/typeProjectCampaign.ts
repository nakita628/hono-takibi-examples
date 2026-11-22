import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeProjectCampaignRoute } from '../routes'

const app = new OpenAPIHono()

export const typeProjectCampaignHandler = app.openapi(
  getRepositorySearchTypeProjectCampaignRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
