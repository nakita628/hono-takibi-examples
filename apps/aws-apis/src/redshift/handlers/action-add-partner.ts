import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAddPartnerRoute, postActionAddPartnerRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAddPartnerHandler = app
  .openapi(getActionAddPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
