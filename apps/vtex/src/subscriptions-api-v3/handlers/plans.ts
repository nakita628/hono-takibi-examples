import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiRnsPvtPlansIdRoute, getApiRnsPvtPlansRoute } from '../routes'

const app = new OpenAPIHono()

export const plansHandler = app
  .openapi(getApiRnsPvtPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPvtPlansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
