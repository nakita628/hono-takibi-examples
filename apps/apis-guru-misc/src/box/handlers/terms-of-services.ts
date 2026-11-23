import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTermsOfServicesRoute,
  getTermsOfServicesTermsOfServiceIdRoute,
  postTermsOfServicesRoute,
  putTermsOfServicesTermsOfServiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const termsOfServicesHandler = app
  .openapi(getTermsOfServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTermsOfServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTermsOfServicesTermsOfServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTermsOfServicesTermsOfServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
