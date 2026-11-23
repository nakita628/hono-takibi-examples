import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  gitignoreHandler,
  labelHandler,
  licensesHandler,
  markdownHandler,
  markupHandler,
  notificationsHandler,
  orgHandler,
  orgsHandler,
  packagesHandler,
  reposHandler,
  repositoriesHandler,
  searchHandler,
  settingsHandler,
  signingKeyGpgHandler,
  signingKeyPubHandler,
  teamsHandler,
  tokenHandler,
  topicsHandler,
  userHandler,
  usersHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminHandler)
  .route('/', gitignoreHandler)
  .route('/', labelHandler)
  .route('/', licensesHandler)
  .route('/', markdownHandler)
  .route('/', markupHandler)
  .route('/', notificationsHandler)
  .route('/', orgHandler)
  .route('/', orgsHandler)
  .route('/', packagesHandler)
  .route('/', reposHandler)
  .route('/', repositoriesHandler)
  .route('/', searchHandler)
  .route('/', settingsHandler)
  .route('/', signingKeyGpgHandler)
  .route('/', signingKeyPubHandler)
  .route('/', teamsHandler)
  .route('/', tokenHandler)
  .route('/', topicsHandler)
  .route('/', userHandler)
  .route('/', usersHandler)
  .route('/', versionHandler)

export default app
