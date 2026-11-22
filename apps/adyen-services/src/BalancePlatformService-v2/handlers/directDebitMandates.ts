import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMandatesMandateIdRoute,
  getMandatesRoute,
  patchMandatesMandateIdRoute,
  postMandatesMandateIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directDebitMandatesHandler = app
  .openapi(getMandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMandatesMandateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMandatesMandateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMandatesMandateIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
