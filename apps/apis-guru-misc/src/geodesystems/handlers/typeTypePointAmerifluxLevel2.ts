import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypePointAmerifluxLevel2Route } from '../routes'

const app = new OpenAPIHono()

export const typeTypePointAmerifluxLevel2Handler = app.openapi(
  getRepositorySearchTypeTypePointAmerifluxLevel2Route,
  (c) => {
    throw new Error('Not implemented')
  },
)
