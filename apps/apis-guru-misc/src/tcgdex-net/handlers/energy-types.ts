import { OpenAPIHono } from '@hono/zod-openapi'
import { getEnergyTypesEnergyTypeRoute, getEnergyTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const energyTypesHandler = app
  .openapi(getEnergyTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnergyTypesEnergyTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
