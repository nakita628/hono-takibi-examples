import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ContractContractRoute } from '../routes'

const app = new OpenAPIHono()

export const contractsHandler = app.openapi(getApiV2ContractContractRoute, (c) => {
  throw new Error('Not implemented')
})
