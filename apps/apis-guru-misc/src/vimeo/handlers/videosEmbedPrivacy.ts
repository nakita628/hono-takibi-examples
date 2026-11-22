import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdPrivacyDomainsDomainRoute,
  getVideosVideoIdPrivacyDomainsRoute,
  putVideosVideoIdPrivacyDomainsDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosEmbedPrivacyHandler = app
  .openapi(getVideosVideoIdPrivacyDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdPrivacyDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdPrivacyDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
