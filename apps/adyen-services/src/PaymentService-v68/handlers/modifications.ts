import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAdjustAuthorisationRoute,
  postCancelOrRefundRoute,
  postCancelRoute,
  postCaptureRoute,
  postDonateRoute,
  postRefundRoute,
  postTechnicalCancelRoute,
  postVoidPendingRefundRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modificationsHandler = app
  .openapi(postAdjustAuthorisationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCancelOrRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDonateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTechnicalCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoidPendingRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
