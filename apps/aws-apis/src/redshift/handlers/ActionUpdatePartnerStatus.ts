import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdatePartnerStatusRoute, postActionUpdatePartnerStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUpdatePartnerStatusHandler = app
  .openapi(getActionUpdatePartnerStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdatePartnerStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
