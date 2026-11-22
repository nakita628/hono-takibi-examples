import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAddPartnerRoute, postActionAddPartnerRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAddPartnerHandler = app
  .openapi(getActionAddPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
