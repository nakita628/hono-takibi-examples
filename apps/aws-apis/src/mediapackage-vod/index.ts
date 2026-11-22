import { OpenAPIHono } from '@hono/zod-openapi'
import {
  assetsHandler,
  packagingConfigurationsHandler,
  packagingGroupsHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', packagingGroupsHandler)
  .route('/', assetsHandler)
  .route('/', packagingConfigurationsHandler)
  .route('/', tagsHandler)

export default app
