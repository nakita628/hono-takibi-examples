import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdatePartnerStatusRoute, postActionUpdatePartnerStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUpdatePartnerStatusHandler = app
  .openapi(getActionUpdatePartnerStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdatePartnerStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
