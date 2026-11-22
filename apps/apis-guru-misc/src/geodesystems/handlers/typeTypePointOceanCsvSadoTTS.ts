import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointOceanCsvSadoTTSRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointOceanCsvSadoTTSHandler = app.openapi(
  getRepositorySearchTypeTypePointOceanCsvSadoTTSRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
