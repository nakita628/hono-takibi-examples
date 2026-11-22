import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  chineseHandler,
  generalHandler,
  indianHandler,
  japaneseHandler,
  personalHandler,
  socialHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', adminHandler)
  .route('/', indianHandler)
  .route('/', chineseHandler)
  .route('/', personalHandler)
  .route('/', japaneseHandler)
  .route('/', generalHandler)
  .route('/', socialHandler)

export default app
