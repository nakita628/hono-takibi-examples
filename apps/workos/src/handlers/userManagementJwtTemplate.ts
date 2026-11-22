import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserManagementJwtTemplateRoute, putUserManagementJwtTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const userManagementJwtTemplateHandler = app
  .openapi(getUserManagementJwtTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserManagementJwtTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
