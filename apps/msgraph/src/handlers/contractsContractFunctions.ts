import { OpenAPIHono } from '@hono/zod-openapi'
import { getContractsDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const contractsContractFunctionsHandler = app.openapi(getContractsDeltaRoute, (c) => {
  throw new Error('Not implemented')
})
