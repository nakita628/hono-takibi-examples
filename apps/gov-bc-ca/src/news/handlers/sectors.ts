import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiSectorsKeyRoute, getApiSectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const sectorsHandler = app
  .openapi(getApiSectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSectorsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
