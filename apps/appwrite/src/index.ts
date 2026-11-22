import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  avatarsHandler,
  databasesHandler,
  functionsHandler,
  graphqlHandler,
  healthHandler,
  localeHandler,
  messagingHandler,
  sitesHandler,
  storageHandler,
  teamsHandler,
  tokensHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', avatarsHandler)
  .route('/', databasesHandler)
  .route('/', functionsHandler)
  .route('/', graphqlHandler)
  .route('/', healthHandler)
  .route('/', localeHandler)
  .route('/', messagingHandler)
  .route('/', sitesHandler)
  .route('/', storageHandler)
  .route('/', teamsHandler)
  .route('/', tokensHandler)
  .route('/', usersHandler)

export default app
