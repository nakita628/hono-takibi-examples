import { OpenAPIHono } from '@hono/zod-openapi'
import {
  changePasswordHandler,
  loginHandler,
  logoutHandler,
  requestPasswordResetHandler,
  signinHandler,
  signinsHandler,
  userHandler,
  usersHandler,
  verifyPasswordChangeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', changePasswordHandler)
  .route('/', loginHandler)
  .route('/', logoutHandler)
  .route('/', requestPasswordResetHandler)
  .route('/', signinHandler)
  .route('/', signinsHandler)
  .route('/', userHandler)
  .route('/', usersHandler)
  .route('/', verifyPasswordChangeHandler)

export default app
