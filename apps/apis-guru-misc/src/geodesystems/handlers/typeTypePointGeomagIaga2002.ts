import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointGeomagIaga2002Route } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointGeomagIaga2002Handler = app.openapi(
  getRepositorySearchTypeTypePointGeomagIaga2002Route,
  (c) => {
    throw new Error('Not implemented')
  },
)
