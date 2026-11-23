import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersMeOrganizationsRoute,
  getUsersMeRoute,
  postUsersMeProjectsTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeProjectsTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
