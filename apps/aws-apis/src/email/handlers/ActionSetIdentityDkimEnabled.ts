import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetIdentityDkimEnabledRoute,
  postActionSetIdentityDkimEnabledRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSetIdentityDkimEnabledHandler = app
  .openapi(getActionSetIdentityDkimEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetIdentityDkimEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
