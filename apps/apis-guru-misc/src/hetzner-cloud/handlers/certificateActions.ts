import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCertificatesIdActionsActionIdRoute,
  getCertificatesIdActionsRoute,
  postCertificatesIdActionsRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificateActionsHandler = app
  .openapi(getCertificatesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCertificatesIdActionsRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
