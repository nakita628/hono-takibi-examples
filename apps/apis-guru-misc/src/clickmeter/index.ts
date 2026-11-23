import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  aggregatedHandler,
  clickstreamHandler,
  conversionsHandler,
  datapointsHandler,
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
  .route('/', clickstreamHandler)
  .route('/', conversionsHandler)
  .route('/', datapointsHandler)
  .route('/', domainsHandler)
  .route('/', groupsHandler)
  .route('/', hitsHandler)
  .route('/', meHandler)
  .route('/', retargetingHandler)
  .route('/', tagsHandler)

export default app
