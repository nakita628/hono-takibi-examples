import { OpenAPIHono } from '@hono/zod-openapi'
import {
  locationHandler,
  lordsInterestsHandler,
  membersHandler,
  partiesHandler,
  postsHandler,
  referenceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', locationHandler)
  .route('/', lordsInterestsHandler)
  .route('/', membersHandler)
  .route('/', partiesHandler)
  .route('/', postsHandler)
  .route('/', referenceHandler)

export default app
