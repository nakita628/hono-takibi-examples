import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionAccountAgreementsRoute,
  postApiVersionAccountAgreementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountAgreementsHandler = app
  .openapi(postApiVersionAccountAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
