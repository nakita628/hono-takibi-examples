import { OpenAPIHono } from '@hono/zod-openapi'
import {
  projectsHandler,
  resourceGetIamPolicyHandler,
  resourceSetIamPolicyHandler,
  resourceTestIamPermissionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', projectsHandler)
  .route('/', resourceGetIamPolicyHandler)
  .route('/', resourceSetIamPolicyHandler)
  .route('/', resourceTestIamPermissionsHandler)

export default app
