import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CouponsDeleteByIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const couponsDeleteByIdsHandler = app.openapi(postV1CouponsDeleteByIdsRoute, (c) => {
  throw new Error('Not implemented')
})
