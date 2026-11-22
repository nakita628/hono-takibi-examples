import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3ReferenceOptionsContractsRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceOptionsContractsListHandler = app.openapi(
  getV3ReferenceOptionsContractsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
