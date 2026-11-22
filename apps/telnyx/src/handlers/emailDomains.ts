import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailDomainsIdRoute,
  getEmailDomainsIdHealthRoute,
  getEmailDomainsIdRoute,
  getEmailDomainsRoute,
  patchEmailDomainsIdRoute,
  postEmailDomainsDomainIdRotateDkimRoute,
  postEmailDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailDomainsHandler = app
  .openapi(getEmailDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailDomainsDomainIdRotateDkimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmailDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailDomainsIdHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
