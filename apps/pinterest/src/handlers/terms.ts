import { OpenAPIHono } from '@hono/zod-openapi'
import { getTermsRelatedRoute, getTermsSuggestedRoute } from '../routes'

const app = new OpenAPIHono()

export const termsHandler = app
  .openapi(getTermsRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTermsSuggestedRoute, (c) => {
    throw new Error('Not implemented')
  })
