import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSetSMSAttributesRoute, postActionSetSMSAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSetSmsAttributesHandler = app
  .openapi(getActionSetSMSAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetSMSAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
