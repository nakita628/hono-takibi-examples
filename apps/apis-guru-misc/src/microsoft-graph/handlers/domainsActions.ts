import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDomainsDomainIdMicrosoftGraphForceDeleteRoute,
  postDomainsDomainIdMicrosoftGraphPromoteRoute,
  postDomainsDomainIdMicrosoftGraphVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsActionsHandler = app
  .openapi(postDomainsDomainIdMicrosoftGraphForceDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdMicrosoftGraphPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsDomainIdMicrosoftGraphVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
