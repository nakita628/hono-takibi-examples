import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addressHandler,
  contactHandler,
  emailHandler,
  identityHandler,
  phoneHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', addressHandler)
  .route('/', contactHandler)
  .route('/', emailHandler)
  .route('/', identityHandler)
  .route('/', phoneHandler)

export default app
