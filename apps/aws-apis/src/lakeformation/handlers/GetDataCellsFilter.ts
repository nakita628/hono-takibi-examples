import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetDataCellsFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const GetDataCellsFilterHandler = app.openapi(postGetDataCellsFilterRoute, (c) => {
  throw new Error('Not implemented')
})
