import { OpenAPIHono } from '@hono/zod-openapi'
import { drvlcHandler, fitcerHandler, rvcerHandler, vhinscHandler, vhtaxHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', drvlcHandler)
  .route('/', fitcerHandler)
  .route('/', rvcerHandler)
  .route('/', vhinscHandler)
  .route('/', vhtaxHandler)

export default app
