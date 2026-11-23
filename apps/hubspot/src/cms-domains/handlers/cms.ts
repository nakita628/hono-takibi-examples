import { OpenAPIHono } from '@hono/zod-openapi'
import { getCmsDomains202609DomainIdRoute, getCmsDomains202609Route } from '../routes'

const app = new OpenAPIHono()

export const cmsHandler = app
  .openapi(getCmsDomains202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsDomains202609DomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
