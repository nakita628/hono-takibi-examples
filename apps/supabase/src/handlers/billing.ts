import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsRefBillingAddonsAddonVariantRoute,
  getV1ProjectsRefBillingAddonsRoute,
  patchV1ProjectsRefBillingAddonsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getV1ProjectsRefBillingAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefBillingAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefBillingAddonsAddonVariantRoute, (c) => {
    throw new Error('Not implemented')
  })
