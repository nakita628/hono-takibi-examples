import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDomainsDomainIdForceDeleteRoute,
  postDomainsDomainIdPromoteRoute,
  postDomainsDomainIdVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsDomainActionsHandler = app
  .openapi(postDomainsDomainIdForceDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
