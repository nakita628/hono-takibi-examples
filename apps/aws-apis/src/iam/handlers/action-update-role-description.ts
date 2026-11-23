import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateRoleDescriptionRoute,
  postActionUpdateRoleDescriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUpdateRoleDescriptionHandler = app
  .openapi(getActionUpdateRoleDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateRoleDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
