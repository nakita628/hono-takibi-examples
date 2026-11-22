import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointOceanCsvSadoPositionRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointOceanCsvSadoPositionHandler = app.openapi(
  getRepositorySearchTypeTypePointOceanCsvSadoPositionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
