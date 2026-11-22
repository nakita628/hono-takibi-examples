import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  authHandler,
  configHandler,
  filesHandler,
  foldersHandler,
  mediaHandler,
  onlyofficeHandler,
  proHandler,
  sharedFoldersHandler,
  sharesHandler,
  tagsHandler,
  totpHandler,
  trashHandler,
  uploadsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminHandler)
  .route('/', usersHandler)
  .route('/', authHandler)
  .route('/', filesHandler)
  .route('/', sharesHandler)
  .route('/', trashHandler)
  .route('/', tagsHandler)
  .route('/', foldersHandler)
  .route('/', sharedFoldersHandler)
  .route('/', mediaHandler)
  .route('/', onlyofficeHandler)
  .route('/', proHandler)
  .route('/', totpHandler)
  .route('/', configHandler)
  .route('/', uploadsHandler)

export default app
