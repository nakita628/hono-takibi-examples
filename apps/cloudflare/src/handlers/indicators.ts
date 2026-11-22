import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorTypesCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const indicatorsHandler = app.openapi(
  postAccountsAccountIdCloudforceOneEventsDatasetDatasetIdIndicatorTypesCreateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
