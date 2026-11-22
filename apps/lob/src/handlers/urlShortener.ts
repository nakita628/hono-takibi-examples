import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDomainsDomainIdRoute,
  deleteLinksLinkIdRoute,
  getDomainsDomainIdRoute,
  getDomainsRoute,
  getLinksLinkIdRoute,
  getLinksRoute,
  patchLinksLinkIdRoute,
  postDomainsRoute,
  postLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const urlShortenerHandler = app
  .openapi(getDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDomainsDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLinksLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
