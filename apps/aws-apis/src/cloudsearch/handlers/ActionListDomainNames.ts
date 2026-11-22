import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListDomainNamesRoute, postActionListDomainNamesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListDomainNamesHandler = app
  .openapi(getActionListDomainNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListDomainNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
