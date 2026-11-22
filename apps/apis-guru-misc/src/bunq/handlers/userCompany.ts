import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserCompanyItemIdRoute, putUserCompanyItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const userCompanyHandler = app
  .openapi(getUserCompanyItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserCompanyItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
