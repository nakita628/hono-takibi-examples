import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2alpha1NameRoute,
  postV2alpha1IdCheckInRoute,
  postV2alpha1NameCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV2alpha1IdCheckInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2alpha1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
