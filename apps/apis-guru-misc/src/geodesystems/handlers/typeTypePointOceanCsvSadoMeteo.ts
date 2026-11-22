import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointOceanCsvSadoMeteoRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointOceanCsvSadoMeteoHandler = app.openapi(
  getRepositorySearchTypeTypePointOceanCsvSadoMeteoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
