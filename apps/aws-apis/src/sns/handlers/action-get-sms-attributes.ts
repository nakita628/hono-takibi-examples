import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetSMSAttributesRoute, postActionGetSMSAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetSmsAttributesHandler = app
  .openapi(getActionGetSMSAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetSMSAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
