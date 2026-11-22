import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateDataCellsFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const CreateDataCellsFilterHandler = app.openapi(postCreateDataCellsFilterRoute, (c) => {
  throw new Error('Not implemented')
})
