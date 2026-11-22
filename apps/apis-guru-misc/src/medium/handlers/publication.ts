import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPublicationIdForPublicationSlugRoute,
  getPublicationPublicationIdArticlesRoute,
  getPublicationPublicationIdNewsletterRoute,
  getPublicationPublicationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicationHandler = app
  .openapi(getPublicationIdForPublicationSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicationPublicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicationPublicationIdArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPublicationPublicationIdNewsletterRoute, (c) => {
    throw new Error('Not implemented')
  })
