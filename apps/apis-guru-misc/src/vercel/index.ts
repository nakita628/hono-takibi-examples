import { OpenAPIHono } from '@hono/zod-openapi'
import {
  edgeConfigHandler,
  registrationHandler,
  v10Handler,
  v11Handler,
  v12Handler,
  v13Handler,
  v1Handler,
  v2Handler,
  v3Handler,
  v4Handler,
  v5Handler,
  v6Handler,
  v7Handler,
  v8Handler,
  v9Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', edgeConfigHandler)
  .route('/', registrationHandler)
  .route('/', v1Handler)
  .route('/', v10Handler)
  .route('/', v11Handler)
  .route('/', v12Handler)
  .route('/', v13Handler)
  .route('/', v2Handler)
  .route('/', v3Handler)
  .route('/', v4Handler)
  .route('/', v5Handler)
  .route('/', v6Handler)
  .route('/', v7Handler)
  .route('/', v8Handler)
  .route('/', v9Handler)

export default app
