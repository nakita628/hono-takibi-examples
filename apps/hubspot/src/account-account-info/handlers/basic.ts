import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountInfo202609ApiUsageDailyPrivateAppsRoute,
  getAccountInfo202609DetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getAccountInfo202609ApiUsageDailyPrivateAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInfo202609DetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
