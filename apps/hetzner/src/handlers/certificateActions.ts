import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCertificatesActionsIdRoute,
  getCertificatesActionsRoute,
  getCertificatesIdActionsActionIdRoute,
  getCertificatesIdActionsRoute,
  postCertificatesIdActionsRetryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certificateActionsHandler = app
  .openapi(getCertificatesActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCertificatesIdActionsRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCertificatesIdActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
