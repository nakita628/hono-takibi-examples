import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListInstanceProfilesForRoleRoute,
  postActionListInstanceProfilesForRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListInstanceProfilesForRoleHandler = app
  .openapi(getActionListInstanceProfilesForRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListInstanceProfilesForRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
