import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiUserAccountLevelCodeIdRoute, getApiUserAccountLevelCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const userAccountLevelCodeHandler = app
  .openapi(getApiUserAccountLevelCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserAccountLevelCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
