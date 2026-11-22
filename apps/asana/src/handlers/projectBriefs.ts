import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectBriefsProjectBriefGidRoute,
  getProjectBriefsProjectBriefGidRoute,
  postProjectsProjectGidProjectBriefsRoute,
  putProjectBriefsProjectBriefGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectBriefsHandler = app
  .openapi(getProjectBriefsProjectBriefGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectBriefsProjectBriefGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectBriefsProjectBriefGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidProjectBriefsRoute, (c) => {
    throw new Error('Not implemented')
  })
