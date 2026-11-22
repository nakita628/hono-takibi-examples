import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeletePartnerRoute, postActionDeletePartnerRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeletePartnerHandler = app
  .openapi(getActionDeletePartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeletePartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
