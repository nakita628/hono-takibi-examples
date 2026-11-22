import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetIdentityDkimAttributesRoute,
  postActionGetIdentityDkimAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetIdentityDkimAttributesHandler = app
  .openapi(getActionGetIdentityDkimAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetIdentityDkimAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
