import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  aggregatedHandler,
  clickStreamHandler,
  conversionsHandler,
  dataPointsHandler,
  domainsHandler,
  groupsHandler,
  hitsHandler,
  meHandler,
  retargetingHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', aggregatedHandler)
  .route('/', clickStreamHandler)
  .route('/', conversionsHandler)
  .route('/', dataPointsHandler)
  .route('/', domainsHandler)
  .route('/', groupsHandler)
  .route('/', hitsHandler)
  .route('/', meHandler)
  .route('/', retargetingHandler)
  .route('/', tagsHandler)

export default app
