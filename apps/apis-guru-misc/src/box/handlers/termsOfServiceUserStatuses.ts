import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTermsOfServiceUserStatusesRoute,
  postTermsOfServiceUserStatusesRoute,
  putTermsOfServiceUserStatusesTermsOfServiceUserStatusIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const termsOfServiceUserStatusesHandler = app
  .openapi(getTermsOfServiceUserStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTermsOfServiceUserStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTermsOfServiceUserStatusesTermsOfServiceUserStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
