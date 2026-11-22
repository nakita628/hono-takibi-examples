import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cardHandler,
  financeHandler,
  miscHandler,
  nameHandler,
  phoneHandler,
  socialNumberHandler,
  textHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cardHandler)
  .route('/', financeHandler)
  .route('/', miscHandler)
  .route('/', nameHandler)
  .route('/', phoneHandler)
  .route('/', socialNumberHandler)
  .route('/', textHandler)

export default app
