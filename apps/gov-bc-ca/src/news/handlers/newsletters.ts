import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiNewslettersImagesGuidRoute,
  getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyRoute,
  getApiNewslettersNewsletterKeyEditionsEditionKeyRoute,
  getApiNewslettersNewsletterKeyRoute,
  getApiNewslettersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const newslettersHandler = app
  .openapi(getApiNewslettersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNewslettersImagesGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNewslettersNewsletterKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNewslettersNewsletterKeyEditionsEditionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNewslettersNewsletterKeyEditionsEditionKeyArticlesArticleKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
