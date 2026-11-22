import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionApplyEnvironmentManagedActionRoute,
  postActionApplyEnvironmentManagedActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionApplyEnvironmentManagedActionHandler = app
  .openapi(getActionApplyEnvironmentManagedActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionApplyEnvironmentManagedActionRoute, (c) => {
    throw new Error('Not implemented')
  })
