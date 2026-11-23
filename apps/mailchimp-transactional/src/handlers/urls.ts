import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUrlsAddTrackingDomainRoute,
  postUrlsCheckTrackingDomainRoute,
  postUrlsDeleteTrackingDomainRoute,
  postUrlsTrackingDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const urlsHandler = app
  .openapi(postUrlsTrackingDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUrlsAddTrackingDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUrlsCheckTrackingDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUrlsDeleteTrackingDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
