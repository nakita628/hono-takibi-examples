import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeCampaignExpendituresRoute } from '../routes'

const app = new OpenAPIHono()

export const typeCampaignExpendituresHandler = app.openapi(
  getRepositorySearchTypeCampaignExpendituresRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
