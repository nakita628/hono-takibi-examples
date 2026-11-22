import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3ReferenceOptionsContractsOptionsTickerRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceOptionsContractHandler = app.openapi(
  getV3ReferenceOptionsContractsOptionsTickerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
