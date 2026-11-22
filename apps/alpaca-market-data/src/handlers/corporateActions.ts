import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1EventsCorporateActionsRoute, getV1CorporateActionsRoute } from '../routes'

const app = new OpenAPIHono()

export const corporateActionsHandler = app
  .openapi(getV1beta1EventsCorporateActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CorporateActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
