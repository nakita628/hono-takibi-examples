import { OpenAPIHono } from '@hono/zod-openapi'
import {
  checkHandler,
  controlHandler,
  formatHandler,
  networkUnblockHandler,
  psd2Handler,
  searchHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', checkHandler)
  .route('/', controlHandler)
  .route('/', networkUnblockHandler)
  .route('/', psd2Handler)
  .route('/', searchHandler)
  .route('/', formatHandler)

export default app
