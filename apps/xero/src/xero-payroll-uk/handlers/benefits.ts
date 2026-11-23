import { OpenAPIHono } from '@hono/zod-openapi'
import { getBenefitsIdRoute, getBenefitsRoute, postBenefitsRoute } from '../routes'

const app = new OpenAPIHono()

export const benefitsHandler = app
  .openapi(getBenefitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBenefitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBenefitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
