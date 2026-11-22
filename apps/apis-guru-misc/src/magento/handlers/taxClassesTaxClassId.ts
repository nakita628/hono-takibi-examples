import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1TaxClassesTaxClassIdRoute, getV1TaxClassesTaxClassIdRoute } from '../routes'

const app = new OpenAPIHono()

export const taxClassesTaxClassIdHandler = app
  .openapi(deleteV1TaxClassesTaxClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxClassesTaxClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
