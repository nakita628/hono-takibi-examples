import { OpenAPIHono } from '@hono/zod-openapi'
import {
  assetHandler,
  catalogueHandler,
  channelHandler,
  contributorHandler,
  featureHandler,
  platformHandler,
  scheduleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assetHandler)
  .route('/', catalogueHandler)
  .route('/', channelHandler)
  .route('/', contributorHandler)
  .route('/', featureHandler)
  .route('/', platformHandler)
  .route('/', scheduleHandler)

export default app
