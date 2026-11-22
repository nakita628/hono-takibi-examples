import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteDomainRoute, postActionDeleteDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteDomainHandler = app
  .openapi(getActionDeleteDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
