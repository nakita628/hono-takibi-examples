import { OpenAPIHono } from '@hono/zod-openapi'
import { getSolutionsRoute, patchSolutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const solutionsSolutionsRootHandler = app
  .openapi(getSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
