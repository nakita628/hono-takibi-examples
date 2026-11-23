import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmployersEffectiveDateRoute,
  getEmployersEffectiveDateSummaryRoute,
  getEmployersRoute,
  getEmployersSummaryRoute,
  getEmployersTagsRoute,
  getEmployersTagTagIdRoute,
  postEmployersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employersHandler = app
  .openapi(getEmployersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployersSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployersTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployersTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployersEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployersEffectiveDateSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
