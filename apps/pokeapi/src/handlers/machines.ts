import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2MachineIdIndexRoute, getApiV2MachineIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const machinesHandler = app
  .openapi(getApiV2MachineIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2MachineIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
